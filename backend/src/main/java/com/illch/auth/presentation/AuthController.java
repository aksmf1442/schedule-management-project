package com.illch.auth.presentation;

import com.illch.auth.application.AuthService;
import com.illch.infrasturcture.auth.AccessTokenResponse;
import com.illch.auth.dto.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AccessTokenResponse> login(@RequestBody LoginRequest loginRequest) {
        AccessTokenResponse accessTokenResponse = authService.createAccessToken(loginRequest);
        return ResponseEntity.ok(accessTokenResponse);
    }
}
