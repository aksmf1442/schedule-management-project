package com.illch.auth.infrastructure;

import lombok.Getter;

@Getter
public abstract class JwtToken {

    private String name;
    private String secretKey;
    private Long validTime;
}
