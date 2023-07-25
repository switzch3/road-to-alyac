import { useEffect, useState } from "react";
import { useScript } from "usehooks-ts";

const NCP_CLIENT_ID = "oxziiq8o6e";

export function useInitMap(REF_ID: string) {
  const [naverMap, setNaverMap] = useState<naver.maps.Map>();
  const [currentBounds, setCurrentBounds] = useState<naver.maps.LatLngBounds>();
  const statusMap = useScript(
    `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NCP_CLIENT_ID}`,
    {}
  );
  useEffect(
    function loadNAVERMap() {
      let boundListener: naver.maps.MapEventListener;
      if (statusMap === "ready") {
        const defaultPosition = new naver.maps.LatLng(37.4963764, 127.0320237); //역삼 푸른솔 도서관

        const mapOptions = {
          center: defaultPosition,
          zoom: 15, // 네이버 맵의 줌레벨
        };

        const map = new naver.maps.Map(REF_ID);
        map.setOptions(mapOptions);

        boundListener = naver.maps.Event.addListener(
          map,
          "bounds_changed",
          function (bounds) {
            setCurrentBounds(bounds);
          }
        );

        setNaverMap(map);
      }
      return () => {
        naverMap?.destroy();
        naver.maps.Event.removeListener(boundListener);
        setNaverMap(undefined);
      };
    },
    [statusMap]
  );
  return [naverMap, currentBounds] as const;
}
