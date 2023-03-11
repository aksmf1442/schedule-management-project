package com.illch.subscription.domain;

import com.illch.BaseEntity;
import com.illch.calendar.domain.Calendar;
import com.illch.member.domain.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class Subscription extends BaseEntity {

    @Column(nullable = false)
    private Color color;

    @Column(nullable = false)
    private SubscriptionRole role;

    @Column(nullable = false)
    private boolean checked;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calendar_id", nullable = false)
    private Calendar calendar;

    @Builder
    public Subscription(Color color, SubscriptionRole role, boolean checked, Member member, Calendar calendar) {
        this.color = color;
        this.role = role;
        this.checked = checked;
        this.member = member;
        this.calendar = calendar;
    }

}
