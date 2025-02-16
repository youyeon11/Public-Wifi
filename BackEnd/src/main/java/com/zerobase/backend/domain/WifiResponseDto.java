package com.zerobase.backend.domain;

public record WifiResponseDto (
        String wifiNo,
        String region,
        String wifiName,
        String Address,
        String detailAddress,
        int stair,
        String instCategory,
        String instDep,
        String service,
        String networkCategory,
        int createdYear,
        boolean isIndoor,
        String environment,
        Double latitue,
        Double longtitute
){
}
