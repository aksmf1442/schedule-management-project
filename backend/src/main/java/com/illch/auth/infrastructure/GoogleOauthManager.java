package com.illch.auth.infrastructure;

import com.illch.auth.dto.OauthMemberResponse;
import com.illch.auth.infrastructure.dto.OauthTokenRequest;
import com.illch.auth.infrastructure.dto.OauthTokenResponse;
import com.illch.member.domain.Member;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class GoogleOauthManager {
    public static final String CODE = "code";
    public static final String CLIENT_ID = "client_id";
    public static final String CLIENT_SECRET = "client_secret";
    public static final String REDIRECT_URI = "redirect_uri";
    public static final String GRANT_TYPE = "grant_type";

    private final String JSON_PROPERTY_ID = "sub";
    private final String JSON_PROPERTY_NAME = "name";
    private final String JSON_PROPERTY_PICTURE = "picture";

    @Value("${google.client.id}")
    private String clientId;

    @Value("${google.client.secret}")
    private String clientSecret;

    @Value("${google.client.redirect-uri}")
    private String redirectUri;

    @Value("${google.client.grant-type}")
    private String grantType;

    @Value("${google.url.access-token}")
    private String accessTokenUrl;

    @Value("${google.url.profile}")
    private String thumbnailURL;

    private final WebClient webClient = WebClient.create();

    public Member findMemberByOauthCode(String code) {
        OauthTokenResponse oauthTokenResponse = getAccessTokenByOauthCode(code);
        Mono<JSONObject> jsonObjectMono = webClient
                .get()
                .uri(thumbnailURL)
                .headers(header -> header.setBearerAuth(oauthTokenResponse.getAccessToken()))
                .exchangeToMono(response -> {
                    if (!response.statusCode().equals(HttpStatus.OK)) {
                        throw new RuntimeException();
                    }
                    return response.bodyToMono(JSONObject.class);
                });

        JSONObject jsonObject = jsonObjectMono.block();
        OauthMemberResponse memberResponse = extractMemberByJson(
                jsonObject);
        return memberResponse.toMember();
    }

    private OauthTokenResponse getAccessTokenByOauthCode(String code) {
        OauthTokenRequest oauthTokenRequest = createOauthTokenRequest(code);
        Mono<OauthTokenResponse> oauthTokenResponseMono = webClient
                .post()
                .uri(accessTokenUrl)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                .accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromFormData(
                                CODE, oauthTokenRequest.getCode())
                        .with(CLIENT_ID, oauthTokenRequest.getClientId())
                        .with(CLIENT_SECRET, oauthTokenRequest.getClientSecret())
                        .with(REDIRECT_URI, oauthTokenRequest.getRedirectUri())
                        .with(GRANT_TYPE, oauthTokenRequest.getGrantType())
                )
                .exchangeToMono(response -> {
                    if (!response.statusCode().equals(HttpStatus.OK)) {
                        throw new RuntimeException();
                    }
                    return response.bodyToMono(OauthTokenResponse.class);
                });

        return oauthTokenResponseMono.block();
    }

    protected OauthTokenRequest createOauthTokenRequest(String code) {
        return OauthTokenRequest.builder()
                .code(code)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .redirectUri(redirectUri)
                .grantType(grantType)
                .build();
    }

    protected OauthMemberResponse extractMemberByJson(JSONObject jsonObject) {
        String socialId = jsonObject.get(JSON_PROPERTY_ID).toString();
        String nickname = jsonObject.get(JSON_PROPERTY_NAME).toString();
        String thumbnailURL = jsonObject.get(JSON_PROPERTY_PICTURE).toString();
        return OauthMemberResponse.of(socialId, nickname, thumbnailURL);
    }
}
