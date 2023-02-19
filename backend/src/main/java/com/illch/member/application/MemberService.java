package com.illch.member.application;

import com.illch.global.config.auth.AppMember;
import com.illch.member.domain.Member;
import com.illch.member.dto.MemberResponse;
import com.illch.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberResponse findMyInfo(AppMember appMember) {
        Member member = memberRepository.findById(appMember.getId())
                .orElseThrow(RuntimeException::new);
        return MemberResponse.of(member);
    }
}
