package com.illch.member.presentation;

import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.member.application.MemberService;
import com.illch.member.dto.MemberResponse;
import com.illch.member.dto.UpdateMyNicknameRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/me")
    public ResponseEntity<MemberResponse> findMyInfo(@LoginMember AppMember appMember) {
        MemberResponse memberResponse = memberService.findMyInfo(appMember);
        return ResponseEntity.ok(memberResponse);
    }

    @PatchMapping("/me/nickname")
    public ResponseEntity<MemberResponse> updateMyNickname(@Valid @RequestBody UpdateMyNicknameRequest updateMyNicknameRequest,
                                                           @LoginMember AppMember appMember) {
        MemberResponse memberResponse = memberService.updateMyNickname(updateMyNicknameRequest, appMember.getId());
        return ResponseEntity.ok(memberResponse);
    }
}
