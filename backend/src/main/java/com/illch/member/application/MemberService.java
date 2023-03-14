package com.illch.member.application;

import com.illch.global.config.auth.AppMember;
import com.illch.member.domain.Member;
import com.illch.member.dto.MemberResponse;
import com.illch.member.dto.UpdateMyNicknameRequest;
import com.illch.member.exception.MemberNotFoundException;
import com.illch.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional(readOnly = true)
    public MemberResponse findMyInfo(AppMember appMember) {
        Member member = memberRepository.findById(appMember.getId())
                .orElseThrow(MemberNotFoundException::new);
        return MemberResponse.of(member);
    }

    public MemberResponse updateMyNickname(UpdateMyNicknameRequest updateMyNicknameRequest, Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(MemberNotFoundException::new);
        member.update(updateMyNicknameRequest.getNickname());
        return MemberResponse.of(member);
    }
}
