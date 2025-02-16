import { useState, useEffect } from "react";

export default function App() {
  const [lat, setLat] = useState("0.0");
  const [lnt, setLnt] = useState("0.0");
  const [wifiList, setWifiList] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const latParam = urlParams.get("lat") || "0.0";
    const lntParam = urlParams.get("lnt") || "0.0";
    setLat(latParam);
    setLnt(lntParam);
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            setLat(position.coords.latitude);
            setLnt(position.coords.longitude);
          },
          () => {
            alert("위치 정보를 확인할 수 없으니 직접 입력해주시기 바랍니다.");
          }
      );
    }
  };

  const fetchNearestWifi = async () => {
    if (lat === "0.0" || lnt === "0.0") {
      alert("위치 정보를 입력하신 후에 조회해주세요.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/api/v1/wifi?lat=${lat}&lnt=${lnt}`);
      const data = await response.json();
      setWifiList(data);
    } catch (error) {
      console.error("Error fetching wifi data:", error);
    }
  };

  return (
      <div className="p-4">
        <div className="mb-4">
          <label className="mr-2">LAT:</label>
          <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} className="border p-2 rounded" />
          <label className="ml-4 mr-2">LNT:</label>
          <input type="text" value={lnt} onChange={(e) => setLnt(e.target.value)} className="border p-2 rounded" />
          <button onClick={getCurrentLocation} className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
            내 위치 가져오기
          </button>
          <button onClick={fetchNearestWifi} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            근처 Wifi 정보 보기
          </button>
        </div>

        <table className="border-collapse border border-gray-300 w-full">
          <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">거리(km)</th>
            <th className="border border-gray-300 p-2">관리번호</th>
            <th className="border border-gray-300 p-2">자치구</th>
            <th className="border border-gray-300 p-2">와이파이명</th>
            <th className="border border-gray-300 p-2">도로명 주소</th>
            <th className="border border-gray-300 p-2">상세 주소</th>
            <th className="border border-gray-300 p-2">설치 위치(층)</th>
            <th className="border border-gray-300 p-2">설치 기관</th>
            <th className="border border-gray-300 p-2">설치 유형</th>
            <th className="border border-gray-300 p-2">서비스 구분</th>
            <th className="border border-gray-300 p-2">망 종류</th>
            <th className="border border-gray-300 p-2">설치 년도</th>
            <th className="border border-gray-300 p-2">실내 외 구분</th>
            <th className="border border-gray-300 p-2">WIFI 접속 환경</th>
            <th className="border border-gray-300 p-2">x좌표</th>
            <th className="border border-gray-300 p-2">y좌표</th>
          </tr>
          </thead>
          <tbody>
          {wifiList.length > 0 ? (
              wifiList.map((wifi, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">{wifi.distance}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiMgrNo}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiWrdofc}</td>
                    <td className="border border-gray-300 p-2">
                      <a href={`detail_wifi.jsp?mgrNo=${wifi.xSwifiMgrNo}&distance=${wifi.distance}&wifiname=${wifi.xSwifiMainNm}`}>{wifi.xSwifiMainNm}</a>
                    </td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiAdres1}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiAdres2}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiInstlFloor}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiInstlMby}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiInstlTy}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiSvcSe}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiCmcwr}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiCnstcYear}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiInoutDoor}</td>
                    <td className="border border-gray-300 p-2">{wifi.xSwifiRemars3}</td>
                    <td className="border border-gray-300 p-2">{wifi.lat}</td>
                    <td className="border border-gray-300 p-2">{wifi.lnt}</td>
                  </tr>
              ))
          ) : (
              <tr>
                <td colSpan="17" className="text-center p-4">위치 정보를 입력하신 후에 조회해 주세요.</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
  );
}