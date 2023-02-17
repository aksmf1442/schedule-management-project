package com.illch.infrasturcture.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider {

    private final JwtAccessToken jwtAccessToken;

    public String createAccessToken(Long id) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expireTime = now.plusSeconds(jwtAccessToken.getValidTime());

        return Jwts.builder()
                .claim("id", id)
                .setIssuedAt(Timestamp.valueOf(now))
                .setExpiration(Timestamp.valueOf(expireTime))
                .signWith(SignatureAlgorithm.HS256, jwtAccessToken.getSecretKey())
                .compact();
    }
}
