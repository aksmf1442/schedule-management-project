package com.illch.subscription.exception;

import com.illch.global.exception.http.NotFoundException;
import lombok.Getter;

public class SubscriptionNotFoundException extends NotFoundException {

    public SubscriptionNotFoundException() {
        super("해당 구독은 존재하지 않습니다.");
    }
}
