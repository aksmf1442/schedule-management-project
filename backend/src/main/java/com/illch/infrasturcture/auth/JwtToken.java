package com.illch.infrasturcture.auth;

import lombok.Getter;

@Getter
public abstract class JwtToken {

    private String secretKey;
    private Long validTime;
}