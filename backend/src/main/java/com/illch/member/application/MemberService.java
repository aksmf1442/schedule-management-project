package com.illch.member.application;

import com.illch.global.config.auth.AppMember;
import com.illch.member.domain.Member;
import com.illch.auth.dto.OauthMemberResponse;
import com.illch.member.dto.MemberResponse;
import com.illch.member.dto.UpdateMyNicknameRequest;
import com.illch.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional(readOnly = true)
    public MemberResponse findMyInfo(AppMember appMember) {
        Member member = memberRepository.findById(appMember.getId())
                .orElseThrow(RuntimeException::new);
        return MemberResponse.of(member);
    }

    public MemberResponse updateMyNickname(UpdateMyNicknameRequest updateMyNicknameRequest, Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(RuntimeException::new);
        member.update(updateMyNicknameRequest.getNickname());
        return MemberResponse.of(member);
    }
}
