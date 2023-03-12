package com.illch.auth.presentation;

import com.illch.auth.application.AuthService;
import com.illch.auth.dto.LoginRequest;
import com.illch.auth.infrastructure.JwtRefreshToken;
import com.illch.auth.infrastructure.dto.AccessTokenResponse;
import com.illch.auth.infrastructure.dto.RefreshTokenResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    private final JwtRefreshToken jwtRefreshToken;

    @PostMapping("/login")
    public ResponseEntity<AccessTokenResponse> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        AccessTokenResponse accessTokenResponse = authService.createAccessToken(loginRequest);
        Long memberId = authService.extractMemberIdByAccessToken(accessTokenResponse.getToken());
        createRefreshToken(memberId, response);
        return ResponseEntity.ok(accessTokenResponse);
    }

    private void createRefreshToken(Long memberId, HttpServletResponse response) {
        RefreshTokenResponse newRefreshTokenResponse = authService.createRefreshToken(memberId);
        ResponseCookie refreshCookie = injectRefreshTokenToCookie(newRefreshTokenResponse);
        response.addHeader(HttpHeaders.SET_COOKIE, refreshCookie.toString());
    }

    private ResponseCookie injectRefreshTokenToCookie(RefreshTokenResponse refreshTokenResponse) {
        return ResponseCookie.from("REFRESH_TOKEN", refreshTokenResponse.getToken())
                .sameSite("Lax")
                .httpOnly(true)
                .path("/")
                .maxAge(jwtRefreshToken.getValidTime())
                .build();
    }
}
