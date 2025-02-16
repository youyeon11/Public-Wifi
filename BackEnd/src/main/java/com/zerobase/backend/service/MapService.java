package com.zerobase.backend.service;

import com.zerobase.backend.domain.WifiResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MapService {

    @Value("${spring.data.apikey}")
    private static String apiKey;

    @Transactional
    public List<WifiResponseDto> searchWifi(Double latitute, Double longtitute) {

    }

    // 거리 환산

}
