import { useEffect } from "react";
import { select } from "d3-selection";
import { pie as d3pie, arc as d3arc, PieArcDatum } from "d3-shape";
import { scaleOrdinal } from "d3-scale";

import { getPharmacies } from "@/infra/db/pharmacies";

// marker-clustering.d.ts
declare global {
  let N: typeof naver.maps;
}

type ClusterData = { name: string; value: number };

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

        const markderClustering = new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 17,
          map: naverMap,
          markers,
          disableClickZoom: false,
          gridSize: 120,
          icons: [svgMarker],
          indexGenerator: [1],
        });
        (markderClustering as any).setStylingFunction(
          (clusterMarker: any, count: number) => {
            const cluster = markderClustering._clusters.find(
              (c) => c._clusterMarker._nmarker_id === clusterMarker._nmarker_id
            );
            const memberNames = cluster._clusterMember.map(
              (
                m: any // marker
              ) => m.icon.url.replace("/", "").replace(".svg", "")
            );

            const counts = memberNames.reduce(
              (
                acc: {
                  [key: string]: number;
                },
                cur: string
              ) => {
                acc[cur]++;
                return acc;
              },
              {
                accessible: 0,
                inaccessible: 0,
                unknown: 0,
              }
            );

            const data: ClusterData[] = Object.keys(counts).map((k) => {
              return { name: k, value: counts[k] };
            });

            const svg = select(clusterMarker.getElement()).select("svg");

            const color = scaleOrdinal<string>()
              .domain(["accessible", "inaccessible", "unknown"])
              .range(["#15803D", "#B91C1C", "#FFAB33"]);

            const pie = d3pie<ClusterData>()
              .sort(null)
              .value((d) => d.value);

            const arc = d3arc<PieArcDatum<ClusterData>>()
              .innerRadius(14)
              .outerRadius(Math.min(40, 40) / 2 - 1);

            const arcs = pie(data);

            svg
              .append("g")
              .attr("stroke", "white")
              .selectAll()
              .data(arcs)
              .join("path")
              .attr("fill", (d) => color(d.data.name))
              .attr("d", arc);

            svg
              .append("circle")
              .attr("fill", "white")
              .attr("opacity", "80%")
              .attr("r", 13);
            svg
              .append("text")
              .attr("transform", "translate(0, 5)")
              .attr("font-size", 14)
              .attr("text-anchor", "middle")
              .text((d) => count);
          }
        );
      });
    });
  }, [naverMap]);
}
