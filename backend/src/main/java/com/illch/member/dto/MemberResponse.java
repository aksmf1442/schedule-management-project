package com.illch.member.dto;

import com.illch.member.domain.Member;
import com.illch.member.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class MemberResponse {

    private String socialId;

    private String nickname;

    private String thumbnailURL;


    public static MemberResponse of(String socialId, String nickname, String thumbnailURL) {
        return MemberResponse.builder()
                .socialId(socialId)
                .nickname(nickname)
                .thumbnailURL(thumbnailURL)
                .build();
    }

    public static MemberResponse of(Member member) {
        return MemberResponse.builder()
                .socialId(member.getSocialId())
                .nickname(member.getNickname())
                .thumbnailURL(member.getThumbnailURL())
                .build();
    }

    public Member toMember() {
        return Member.builder()
                .socialId(socialId)
                .nickname(nickname)
                .thumbnailURL(thumbnailURL)
                .role(Role.MEMBER)
                .build();
    }
}

