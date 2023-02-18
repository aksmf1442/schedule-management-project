package com.illch.auth.application;

import com.illch.auth.dto.LoginRequest;
import com.illch.infrasturcture.auth.AccessTokenResponse;
import com.illch.infrasturcture.auth.GoogleOauthManager;
import com.illch.infrasturcture.auth.JwtTokenProvider;
import com.illch.infrasturcture.auth.RefreshTokenResponse;
import com.illch.member.domain.Member;
import com.illch.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class AuthService {

    private final MemberRepository memberRepository;
    private final GoogleOauthManager googleOauthManager;
    private final JwtTokenProvider jwtTokenProvider;

    public AccessTokenResponse createAccessToken(LoginRequest loginRequest) {
        Member oauthMember = googleOauthManager.findMemberByOauthCode(loginRequest.getCode());
        Optional<Member> findMember = memberRepository.findBySocialId(oauthMember.getSocialId());

        if (findMember.isPresent()) {
            return AccessTokenResponse.of(jwtTokenProvider.createAccessToken(findMember.get().getId()));
        }

        Member savedMember = memberRepository.save(oauthMember);
        return AccessTokenResponse.of(jwtTokenProvider.createAccessToken(savedMember.getId()));
    }

    public RefreshTokenResponse createRefreshToken(Long memberId) {
        return RefreshTokenResponse.of(jwtTokenProvider.createRefreshToken(memberId));
    }

    public Long extractMemberIdByAccessToken(String token) {
        return jwtTokenProvider.extractMemberIdByAccessToken(token);
    }

}
