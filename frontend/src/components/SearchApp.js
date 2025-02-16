import { useState, useEffect } from "react";

export default function Main() {
    const [lat, setLat] = useState("0.0");
    const [lnt, setLnt] = useState("0.0");
    const [wifiList, setWifiList] = useState([]);

    // 현재 위치 가져오기
    const getCurrentPosition = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(position.coords.latitude.toString());
                    setLnt(position.coords.longitude.toString());
                },
                () => {
                    alert("위치 정보를 확인할 수 없으니 직접 입력해 주세요.");
                }
            );
        }
    };

    // 서버에서 근처 WiFi 정보 가져오기
    const fetchNearestWifi = async () => {
        if (lat !== "0.0" && lnt !== "0.0") {
            try {
                const response = await fetch(`http://localhost:8080/api/wifi?lat=${lat}&lnt=${lnt}`);
                const data = await response.json();
                setWifiList(data);
            } catch (error) {
                alert("WiFi 정보를 가져오는 중 오류가 발생했습니다.");
            }
        } else {
            alert("위치 정보를 입력하신 후에 조회해주세요.");
        }
    };

    return (
        <div>
            <h2>와이파이 정보 구하기</h2>

            <div className="input">
                <span>LAT:</span>
                <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} />

                <span>LNT:</span>
                <input type="text" value={lnt} onChange={(e) => setLnt(e.target.value)} />

                <button onClick={getCurrentPosition}>내 위치 가져오기</button>
                <button onClick={fetchNearestWifi}>근처 Wifi 정보 보기</button>
            </div>

            <table>
                <thead>
                <tr>
                    <th>거리(km)</th>
                    <th>관리번호</th>
                    <th>자치구</th>
                    <th>와이파이명</th>
                    <th>도로명 주소</th>
                    <th>상세 주소</th>
                    <th>설치 위치(층)</th>
                    <th>설치 기관</th>
                    <th>설치 유형</th>
                    <th>서비스 구분</th>
                    <th>망 종류</th>
                    <th>설치 년도</th>
                    <th>실내 외 구분</th>
                    <th>WIFI 접속 환경</th>
                    <th>x좌표</th>
                    <th>y좌표</th>
                </tr>
                </thead>
                <tbody>
                {wifiList.length > 0 ? (
                    wifiList.map((wifi, index) => (
                        <tr key={index}>
                            <td>{wifi.distance}</td>
                            <td>{wifi.xSwifiMgrNo}</td>
                            <td>{wifi.xSwifiWrdofc}</td>
                            <td>
                                <a href={`detail_wifi.jsp?mgrNo=${wifi.xSwifiMgrNo}&distance=${wifi.distance}&wifiname=${wifi.xSwifiMainNm}`}>
                                    {wifi.xSwifiMainNm}
                                </a>
                            </td>
                            <td>{wifi.xSwifiAdres1}</td>
                            <td>{wifi.xSwifiAdres2}</td>
                            <td>{wifi.xSwifiInstlFloor}</td>
                            <td>{wifi.xSwifiInstlMby}</td>
                            <td>{wifi.xSwifiInstlTy}</td>
                            <td>{wifi.xSwifiSvcSe}</td>
                            <td>{wifi.xSwifiCmcwr}</td>
                            <td>{wifi.xSwifiCnstcYear}</td>
                            <td>{wifi.xSwifiInoutDoor}</td>
                            <td>{wifi.xSwifiRemars3}</td>
                            <td>{wifi.lat}</td>
                            <td>{wifi.lnt}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="17">위치 정보를 입력하신 후에 조회해 주세요.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}