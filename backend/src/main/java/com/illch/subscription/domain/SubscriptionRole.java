package com.illch.subscription.domain;

import com.illch.subscription.exception.UnauthorizedEditingException;

public enum SubscriptionRole {
    ADMIN, EDITOR, COMMON;

    public void validateEditingPermission() {
        if (this == SubscriptionRole.COMMON) {
            throw new UnauthorizedEditingException();
        }
    }
}
