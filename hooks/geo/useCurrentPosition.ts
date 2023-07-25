import { useEffect, useState } from "react";

export function useCurrentPosition() {
  const [value, setValue] = useState<GeolocationPosition>();

  // Note: getCurrentPosition 전체를 호출하기 때문에 포지션 정보를 가져오는데 시간이 걸림. 처음에 가져온 값을 계속 쓰는게 좋을 것 같음.
  // const getCurrentPosition = useCallback(() => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setValue(position);
    });
  }, []);

  return value;
}
