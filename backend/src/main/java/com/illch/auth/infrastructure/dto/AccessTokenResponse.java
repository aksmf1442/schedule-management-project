package com.illch.auth.infrastructure.dto;


import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AccessTokenResponse {
    private String token;

    public static AccessTokenResponse of(String accessToken) {
        return AccessTokenResponse.builder()
                .token(accessToken)
                .build();
    }
}
