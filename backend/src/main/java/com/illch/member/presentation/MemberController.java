package com.illch.member.presentation;

import com.illch.auth.dto.OauthMemberResponse;
import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.member.application.MemberService;
import com.illch.member.dto.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/me")
    public ResponseEntity<MemberResponse> findMyInfo(@LoginMember AppMember appMember) {
        MemberResponse myInfo = memberService.findMyInfo(appMember);
        return ResponseEntity.ok(myInfo);
    }

}
