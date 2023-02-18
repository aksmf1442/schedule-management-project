package com.illch.auth.infrastructure.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RefreshTokenResponse {
    private String token;

    public static RefreshTokenResponse of(String accessToken) {
        return RefreshTokenResponse.builder()
                .token(accessToken)
                .build();
    }
}
