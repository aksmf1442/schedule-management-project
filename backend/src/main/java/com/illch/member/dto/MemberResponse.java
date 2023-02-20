package com.illch.member.dto;

import com.illch.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class MemberResponse {

    private Long id;
    private String nickname;
    private String thumbnailUrl;

    public static MemberResponse of(Member member) {
        return MemberResponse.builder()
                .id(member.getId())
                .nickname(member.getNickname())
                .thumbnailUrl(member.getThumbnailURL())
                .build();
    }
}
