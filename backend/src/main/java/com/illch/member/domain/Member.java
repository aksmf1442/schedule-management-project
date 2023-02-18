package com.illch.member.domain;

import com.illch.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@NoArgsConstructor
@Getter
public class Member extends BaseEntity {
    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String socialId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column(nullable = true)
    private String thumbnailFileName;

    @Column(nullable = true)
    private String thumbnailURL;

    @Builder
    public Member(Long id, String nickname, String socialId,
                  Role role, String thumbnailFileName, String thumbnailURL) {
        this.id = id;
        this.nickname = nickname;
        this.socialId = socialId;
        this.role = role;
        this.thumbnailFileName = thumbnailFileName;
        this.thumbnailURL = thumbnailURL;
    }

}
