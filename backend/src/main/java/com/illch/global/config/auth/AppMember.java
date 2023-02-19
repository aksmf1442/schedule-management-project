package com.illch.global.config.auth;

import com.illch.member.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class AppMember {
    private Long id;
    private Role role;

    public static AppMember of(Long id) {
        return AppMember.builder()
            .id(id)
            .role(Role.MEMBER)
            .build();
    }

}
