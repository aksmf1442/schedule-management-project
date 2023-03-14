package com.illch.global.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
public class ExceptionResponse {

    private String message;

    public static ExceptionResponse of(String message) {
        return ExceptionResponse.builder()
                .message(message)
                .build();
    }
}
