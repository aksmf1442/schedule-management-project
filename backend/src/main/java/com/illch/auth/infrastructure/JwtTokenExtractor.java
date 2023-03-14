package com.illch.auth.infrastructure;

import com.illch.auth.exception.InvalidBearerFormatException;
import com.illch.auth.exception.JwtTokenNullException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

@RequiredArgsConstructor
public class JwtTokenExtractor {
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String REFRESH_TOKEN_COOKIE_NAME = "REFRESH_TOKEN";

    public static String extractAccessToken(HttpServletRequest request) {
        String token = request.getHeader(AUTHORIZATION);
        validateNullToken(token);
        if (checkBearer(token)) {
            return token.substring(BEARER.length()).trim();
        }
        throw new InvalidBearerFormatException();
    }

    public static String extractRefreshToken(HttpServletRequest request) {
        Cookie cookie = WebUtils.getCookie(request, REFRESH_TOKEN_COOKIE_NAME);
        if (Objects.isNull(cookie)) {
            return null;
        }
        return cookie.getValue();
    }

    private static void validateNullToken(String token) {
        if (token == null) {
            throw new JwtTokenNullException();
        }
    }

    private static boolean checkBearer(String authorization) {
        return authorization.startsWith(BEARER);
    }
}
