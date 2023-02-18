package com.illch.auth.infrastructure;

import lombok.Getter;

@Getter
public abstract class JwtToken {

    private String secretKey;
    private Long validTime;
}
