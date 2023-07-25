import { useEffect } from "react";

import { getPharmacies } from "@/infra/db/pharmacies";

// marker-clustering.d.ts
declare global {
  let N: typeof naver.maps;
}

export function useSpotPharmacies(naverMap: naver.maps.Map | undefined) {
  useEffect(() => {
    if (!naverMap) return;

    // Note: naver map 로딩이 되고 나서 로드해야기 때문이다.
    import("@/infra/marker-clustering").then(({ MarkerClustering }) => {
      getPharmacies().then((pharmacies) => {
        const markers: naver.maps.Marker[] = [];
        const htmlMarker1 = {
            content:
              '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/cluster-marker-1.png);background-size:contain;"></div>',
            size: new N.Size(40, 40),
            anchor: new N.Point(20, 20),
          },
          htmlMarker2 = {
            content:
              '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/cluster-marker-2.png);background-size:contain;"></div>',
            size: new N.Size(40, 40),
            anchor: new N.Point(20, 20),
          },
          htmlMarker3 = {
            content:
              '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/cluster-marker-3.png);background-size:contain;"></div>',
            size: new N.Size(40, 40),
            anchor: new N.Point(20, 20),
          },
          htmlMarker4 = {
            content:
              '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/cluster-marker-4.png);background-size:contain;"></div>',
            size: new N.Size(40, 40),
            anchor: new N.Point(20, 20),
          },
          htmlMarker5 = {
            content:
              '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/cluster-marker-5.png);background-size:contain;"></div>',
            size: new N.Size(40, 40),
            anchor: new N.Point(20, 20),
          };
        pharmacies.map((pharmacy) => {
          const { latitude, longitude } = pharmacy.location;
          const location = new naver.maps.LatLng(latitude, longitude);
          const markerOptions = {
            position: location,
            map: naverMap,
            icon: {
              url: "/map-pin.svg",
              size: new naver.maps.Size(24, 24),
              scaledSize: new naver.maps.Size(24, 24),
              anchor: new naver.maps.Point(24, 24),
            },
          };
          const marker = new naver.maps.Marker(markerOptions);

          markers.push(marker);
        });
        // console.log("markers", markers);
        new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 17,
          map: naverMap,
          markers,
          disableClickZoom: false,
          gridSize: 120,
          icons: [
            htmlMarker1,
            htmlMarker2,
            htmlMarker3,
            htmlMarker4,
            htmlMarker5,
          ],
          indexGenerator: [10, 100, 200, 500, 1000],
          stylingFunction: function (clusterMarker: any, count: number) {
            clusterMarker.getElement().children[0].textContent = count;
          },
        });
      });
    });
  }, [naverMap]);
}
