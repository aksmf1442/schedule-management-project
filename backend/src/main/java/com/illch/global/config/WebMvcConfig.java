package com.illch.global.config;

import com.illch.auth.infrastructure.JwtAccessToken;
import com.illch.auth.infrastructure.JwtRefreshToken;
import com.illch.auth.infrastructure.JwtTokenProvider;
import com.illch.global.config.auth.AuthorizationInterceptor;
import com.illch.global.config.auth.LoginMemberArgumentResolver;
import com.illch.global.config.util.PathMatcherInterceptor;
import com.illch.global.config.util.PathMethod;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {
    private final LoginMemberArgumentResolver loginMemberArgumentResolver;

    private final JwtTokenProvider jwtTokenProvider;
    private final JwtAccessToken jwtAccessToken;
    private final JwtRefreshToken jwtRefreshToken;

    @Bean
    public AuthorizationInterceptor authorizationInterceptor() {
        return new AuthorizationInterceptor(jwtTokenProvider, jwtAccessToken, jwtRefreshToken);
    }

    @Bean
    public PathMatcherInterceptor authorizationPathMatcherInterceptor() {
        return new PathMatcherInterceptor(authorizationInterceptor())
                .addIncludePathPattern("/api/**", PathMethod.ALL)
                .addExcludePathPattern("/api/auth/login", PathMethod.POST);
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(loginMemberArgumentResolver);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authorizationPathMatcherInterceptor());
    }
}
