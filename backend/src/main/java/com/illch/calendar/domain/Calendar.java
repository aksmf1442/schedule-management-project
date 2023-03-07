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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Column(nullable = false)
    private boolean opened;

    @Column(nullable = false)
    private boolean deleted;

    @Builder
    public Calendar(String title, Member member, boolean opened, boolean deleted) {
        this.title = title;
        this.member = member;
        this.opened = opened;
        this.deleted = deleted;
    }

    public void updateCalendarTitle(String title) {
        this.title = title;
    }

    public void updateCalendarOpened(boolean opened) {
        this.opened = opened;
    }
}
