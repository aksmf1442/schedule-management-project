package com.illch.auth.dto;

import com.illch.member.domain.Member;
import com.illch.member.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class OauthMemberResponse {

    private String socialId;

    private String nickname;

    private String thumbnailURL;


    public static OauthMemberResponse of(String socialId, String nickname, String thumbnailURL) {
        return OauthMemberResponse.builder()
                .socialId(socialId)
                .nickname(nickname)
                .thumbnailURL(thumbnailURL)
                .build();
    }

    public static OauthMemberResponse of(Member member) {
        return OauthMemberResponse.builder()
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

