/*global kakao*/

import Script from "next/script";

declare global {
    interface Window {
        kakao:any;
    }
}

export default function Map() {
    console.log("test");
    console.log(process.env.NEXT_PUBLIC_KAKAO_CLIENT);
    console.log("생성된 URL:", `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_CLIENT}&autoload=false`);
    const loadKakaoMap = () => {
        console.log("loadKakaoMap 호출됨");
        console.log("kakao 객체:", window.kakao);
        // kakao map 로드
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            new window.kakao.maps.Map(mapContainer, mapOption);
        })
    }
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_CLIENT}&autoload=false`}
                onLoad={() => console.log("Script 로드됨")}
                onReady={loadKakaoMap}
            />
            <div id="map" className="w-full h-screen"></div>
        </>
    )
}