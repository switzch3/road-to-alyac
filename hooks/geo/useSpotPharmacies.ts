import { useEffect } from "react";

import { getPharmacies } from "@/infra/db/pharmacies";
import { stylingCluster } from "@/lib/cluster/styling";

// marker-clustering.d.ts
declare global {
  let N: typeof naver.maps;
}

export type ClusterData = { name: string; value: number };

export function useSpotPharmacies(naverMap: naver.maps.Map | undefined) {
  useEffect(() => {
    if (!naverMap) return;

    // Note: naver map 로딩이 되고 나서 로드해야기 때문이다.
    import("@/infra/marker-clustering").then(({ MarkerClustering }) => {
      getPharmacies().then((pharmacies) => {
        const markers: naver.maps.Marker[] = [];
        const svgMarker = {
          content:
            '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold"><svg width="100%" height="100%" viewBox="-20, -20, 40, 40"></svg></div>',
          size: new N.Size(40, 40),
          anchor: new N.Point(20, 20),
        };

        pharmacies.map((pharmacy) => {
          const { dummyAccessibility } = pharmacy;

          const { latitude, longitude } = pharmacy.location;
          const location = new naver.maps.LatLng(latitude, longitude);
          const markerOptions = {
            position: location,
            map: naverMap,
            icon: {
              url: `/${dummyAccessibility}.svg`,
              size: new naver.maps.Size(28, 28),
              scaledSize: new naver.maps.Size(28, 28),
              anchor: new naver.maps.Point(28, 28),
            },
          };
          const marker = new naver.maps.Marker(markerOptions);

          markers.push(marker);
        });

        const markerClustering = new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 17,
          map: naverMap,
          markers,
          disableClickZoom: false,
          gridSize: 120,
          icons: [svgMarker],
          indexGenerator: [1],
        });
        (markerClustering as any).setStylingFunction(
          (clusterMarker: any, count: number) => {
            stylingCluster(markerClustering, clusterMarker, count);
          }
        );
      });
    });
  }, [naverMap]);
}
