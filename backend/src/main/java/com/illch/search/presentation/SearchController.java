package com.illch.search.presentation;

import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.search.application.SearchService;
import com.illch.search.dto.SearchSchedulesRequest;
import com.illch.search.dto.SearchSchedulesResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/search")
public class SearchController {

    private final SearchService searchService;

    @GetMapping("/schedules")
    public ResponseEntity<SearchSchedulesResponse> searchSchedules(@RequestBody SearchSchedulesRequest searchSchedulesRequest, @LoginMember AppMember appMember) {
        SearchSchedulesResponse searchSchedulesResponse = searchService.searchSchedules(searchSchedulesRequest, appMember.getId());
        return ResponseEntity.ok(searchSchedulesResponse);
    }
}
