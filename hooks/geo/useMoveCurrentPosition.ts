import { useCurrentPosition } from "@/hooks/geo/useCurrentPosition";
import { useCallback, useEffect, useState } from "react";

export function useMoveCurrentPosition(naverMap: naver.maps.Map | undefined) {
  const currentPosition = useCurrentPosition();
  const [currentMarker, setCurrentMaker] = useState<naver.maps.Marker>();

  const [current, setCurrent] = useState<naver.maps.LatLng>();

  useEffect(() => {
    if (!currentPosition || !naverMap) return;
    const current = new naver.maps.LatLng(
      currentPosition.coords.latitude,
      currentPosition.coords.longitude
    );
    setCurrent(current);
  }, [currentPosition, naverMap]);

  useEffect(() => {
    if (!current || !naverMap || currentMarker) return;

    const markerOptions = {
      position: current,
      map: naverMap,
      icon: {
        url: "/current-blue-spot.svg",
        size: new naver.maps.Size(24, 24),
        scaledSize: new naver.maps.Size(24, 24),
        anchor: new naver.maps.Point(24, 24),
      },
    };

    // wgs84lat":"37.493252112194256","dutytime1s":"0900","wgs84lon":"127.02933280804137"

    const marker = new naver.maps.Marker(markerOptions);
    setCurrentMaker(marker); // current position 이 바뀌면 새롭게 바꾸어줘야한다.

    return () => {
      setCurrentMaker(undefined);
    };
  }, [current, naverMap]);

  const moveCurrentPosition = useCallback(() => {
    if (!current || !naverMap) return;

    naverMap.setZoom(19, true);
    setTimeout(() => {
      naverMap.panTo(current);
    }, 500);
  }, [naverMap, currentPosition, currentMarker]);

  return moveCurrentPosition;
}
