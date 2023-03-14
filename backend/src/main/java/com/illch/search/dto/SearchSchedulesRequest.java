package com.illch.search.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SearchSchedulesRequest {

    private Long page;

    private Long limit;

    private String title;



}
