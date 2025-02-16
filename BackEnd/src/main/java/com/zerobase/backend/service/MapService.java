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

        return null;
    }

    // 거리 환산
    private Double distanceCalculator(
            Double x1,
            Double y1,
            Double x2,
            Double y2
    ) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}
