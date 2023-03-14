package com.illch.global.config.auth;

import com.illch.auth.exception.JwtAccessTokenRenewalException;
import com.illch.auth.exception.JwtTokenExpiredException;
import com.illch.auth.infrastructure.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RequiredArgsConstructor
public class AuthorizationInterceptor implements HandlerInterceptor {

    private final JwtTokenProvider jwtTokenProvider;
    private final JwtAccessToken jwtAccessToken;
    private final JwtRefreshToken jwtRefreshToken;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        try {
            String accessToken = JwtTokenExtractor.extractAccessToken(request);
            if (validateToken(accessToken, jwtAccessToken)) {
                return true;
            }
        } catch (Exception e) {
            log.info(e.getMessage());
        }

        String refreshToken = JwtTokenExtractor.extractRefreshToken(request);
        if (validateToken(refreshToken, jwtRefreshToken)) {
            throw new JwtAccessTokenRenewalException();
        }

        throw new JwtTokenExpiredException("모든");
    }

    private boolean validateToken(String token, JwtToken jwtToken) {
        jwtTokenProvider.validateToken(token, jwtToken);
        return true;
    }
}
