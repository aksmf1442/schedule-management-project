package com.illch.member.dto;

import com.illch.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateMyNicknameRequest {

    @NotNull
    @Length(min = 1, max = 10)
    private String nickname;

}
