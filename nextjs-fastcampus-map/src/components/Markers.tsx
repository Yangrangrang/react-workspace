import {useEffect, Dispatch, SetStateAction, useCallback} from "react";

interface MarkerProps {
    map: any;
    storeDatas: any[];
    setCurrentStore: Dispatch<SetStateAction<any>>;
}

export default function Markers({
    map,
    storeDatas,
    setCurrentStore
}: MarkerProps) {

    const loadKakaoMarkers = useCallback(() => {
        console.log("tt");
        if (map) {
            // 식당 데이터 마커 띄우기
            storeDatas?.map((store) => {
                const imageSrc = store?.bizcnd_code_nm
                        ? `images/markers/${store?.bizcnd_code_nm}.png`
                        : '/images/markers/default.png',
                    imageSize = new window.kakao.maps.Size(40, 40),
                    imageOption = {offeset: new window.kakao.maps.Point(27, 69)}

                const markerImage = new window.kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption,
                )

                // 마커가 표시될 위치
                const markerPosition = new window.kakao.maps.LatLng(
                    store?.y_dnts,
                    store?.x_cnts,
                );

                // 마커 생성
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                });

                marker.setMap(map);

                // 마커 커서가 오버되었을 때 마커 위에 표시할 인포윈도우 생성
                const content = `<div class="infowindow">${store?.upso_nm}</div>`   // 인포윈도우에 표시될 내용

                // 커스텀 오버레이를 생성
                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content: content,
                    xAnchor: 0.5,
                    yAnchor: -0.5,
                });

                // 마커에 마우스오버 이벤트를 등록
                window.kakao.maps.event.addListener(marker, "mouseover", function () {
                    // 마커에 마우스오버 이번트가 발생하면 커스텀 오버레이를 마커 위에 표시
                    customOverlay.setMap(map);
                })

                // 마커에 마우스아웃 이벤트 등록
                window.kakao.maps.event.addListener(marker, "mouseout", function () {
                    // 마커에 마우스아웃 이벤트가 발생하면 커스텀 오버레이를 제거
                    customOverlay.setMap(null);
                })

                // 선택한 가게 저장
                window.kakao.maps.event.addListener(marker, "click", function () {
                    setCurrentStore(store);
                });
            });
        }
    }, [map, setCurrentStore, storeDatas]);

    useEffect(() => {
        loadKakaoMarkers();
    }, [loadKakaoMarkers, map]);
    return <></>
};