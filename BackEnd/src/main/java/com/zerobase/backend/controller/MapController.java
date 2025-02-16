package com.zerobase.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/v1/map")
public class MapController {


    // wifi 반환
    //http://localhost:8080/api/v1/wifi?lat=${lat}&lnt=${lnt}
    @GetMapping("/wifi")
    public ResponseEntity<?> getWifi(
            @RequestParam Double latitute,
            @RequestParam Double longtitute
    ) {
        return null;
    }
}
