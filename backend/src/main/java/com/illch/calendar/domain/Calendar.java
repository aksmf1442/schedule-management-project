package com.illch.calendar.domain;

import com.illch.BaseEntity;
import com.illch.member.domain.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class Calendar extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String password;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Column(nullable = false)
    private boolean deleted;

    @Builder
    public Calendar(String title, String password, Member member, boolean deleted) {
        this.title = title;
        this.password = password;
        this.member = member;
        this.deleted = deleted;
    }
}
