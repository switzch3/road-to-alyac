import { select } from "d3-selection";
import { scaleOrdinal } from "d3-scale";
import { arc as d3arc, pie as d3pie, PieArcDatum } from "d3-shape";
import { MarkerClustering } from "@/infra/marker-clustering";
import { ClusterData } from "@/hooks/geo/useSpotPharmacies";

export const stylingCluster = (
  markerClustering: MarkerClustering,
  clusterMarker: any,
  count: number
) => {
  const cluster = markerClustering._clusters.find(
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
};
