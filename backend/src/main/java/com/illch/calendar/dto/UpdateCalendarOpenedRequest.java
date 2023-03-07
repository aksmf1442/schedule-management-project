package com.illch.calendar.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateCalendarOpenedRequest {

    private boolean opened;
}
