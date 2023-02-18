package com.illch.auth.application;

import com.illch.auth.dto.LoginRequest;
import com.illch.auth.infrastructure.JwtAccessToken;
import com.illch.auth.infrastructure.JwtRefreshToken;
import com.illch.auth.infrastructure.dto.AccessTokenResponse;
import com.illch.auth.infrastructure.GoogleOauthManager;
import com.illch.auth.infrastructure.JwtTokenProvider;
import com.illch.auth.infrastructure.dto.RefreshTokenResponse;
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
    private final JwtAccessToken jwtAccessToken;
    private final JwtRefreshToken jwtRefreshToken;

    public AccessTokenResponse createAccessToken(LoginRequest loginRequest) {
        Member oauthMember = googleOauthManager.findMemberByOauthCode(loginRequest.getCode());
        Optional<Member> findMember = memberRepository.findBySocialId(oauthMember.getSocialId());

        if (findMember.isPresent()) {
            return AccessTokenResponse.of(jwtTokenProvider.createToken(findMember.get().getId(), jwtAccessToken));
        }

        Member savedMember = memberRepository.save(oauthMember);
        return AccessTokenResponse.of(jwtTokenProvider.createToken(savedMember.getId(), jwtAccessToken));
    }

    public RefreshTokenResponse createRefreshToken(Long memberId) {
        return RefreshTokenResponse.of(jwtTokenProvider.createToken(memberId, jwtRefreshToken));
    }

    public Long extractMemberIdByAccessToken(String token) {
        return jwtTokenProvider.extractMemberIdByAccessToken(token);
    }

}
