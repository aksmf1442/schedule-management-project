package com.illch.subscription.domain;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public enum Color {
    RED("red"), BLUE("blue"), ORANGE("orange"), PINK("pink"), BLACK("black"), GREEN("green"), YELLOW("yellow");

    private String name;

    Color(String color) {
        this.name = color;
    }

    public static Color pickRandomColor() {
        int idx = (int) (Math.random() * Color.values().length);
        List<Color> colors = Arrays.stream(Color.values()).collect(Collectors.toList());
        return colors.get(idx);
    }

    public String getName() {
        return name;
    }
}
