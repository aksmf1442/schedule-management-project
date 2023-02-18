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

    public String createToken(Long id, JwtToken jwtToken) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expireTime = now.plusSeconds(jwtToken.getValidTime());

        return Jwts.builder()
                .claim("id", id)
                .setIssuedAt(Timestamp.valueOf(now))
                .setExpiration(Timestamp.valueOf(expireTime))
                .signWith(SignatureAlgorithm.HS256, jwtToken.getSecretKey())
                .compact();
    }

    public Long extractMemberIdByAccessToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtAccessToken.getSecretKey())
                .parseClaimsJws(token)
                .getBody();
        return claims.get("id", Long.class);
    }

}
