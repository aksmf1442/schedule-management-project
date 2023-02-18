package com.illch.auth.infrastructure;

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

    private final JwtRefreshToken jwtRefreshToken;

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

    public Long extractMemberIdByAccessToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtAccessToken.getSecretKey())
                .parseClaimsJws(token)
                .getBody();
        return claims.get("id", Long.class);
    }

    public Long extractMemberIdByRefreshToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtRefreshToken.getSecretKey())
                .parseClaimsJws(token)
                .getBody();
        return claims.get("id", Long.class);
    }

    public String createRefreshToken(Long id) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expireTime = now.plusSeconds(jwtRefreshToken.getValidTime());

        return Jwts.builder()
                .claim("id", id)
                .setIssuedAt(Timestamp.valueOf(now))
                .setExpiration(Timestamp.valueOf(expireTime))
                .signWith(SignatureAlgorithm.HS256, jwtRefreshToken.getSecretKey())
                .compact();
    }
}
