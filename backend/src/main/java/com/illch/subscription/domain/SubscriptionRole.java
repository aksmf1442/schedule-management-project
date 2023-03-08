package com.illch.subscription.domain;

public enum SubscriptionRole {
    ADMIN, EDITOR, COMMON;

    public void validateEditingPermission() {
        if (this == SubscriptionRole.COMMON) {
            throw new RuntimeException();
        }
    }
}
