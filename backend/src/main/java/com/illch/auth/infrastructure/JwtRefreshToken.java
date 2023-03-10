package com.illch.auth.infrastructure;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class JwtRefreshToken extends JwtToken {

    private final String name = "RefreshToken";

    @Value("${jwt.refresh-token.secret-key}")
    private String secretKey;

    @Value("${jwt.refresh-token.validTime}")
    private Long validTime;
}
