import { useInitMap, useMoveCurrentPosition } from "@/hooks/geo";
import SVGCurrentSpot from "@/app/components/SVGCurrentSpot";
import { useSpotPharmacies } from "@/hooks/geo/useSpotPharmacies";

const REF_ID = "map";

export default function Main() {
  const [naverMap] = useInitMap(REF_ID);
  const moveCurrent = useMoveCurrentPosition(naverMap);
  useSpotPharmacies(naverMap);

  return (
    <div className="relative">
      <div id={REF_ID} className="h-[calc(100vh-2.5rem)] outline-none"></div>
      <button
        className="absolute bottom-7 right-7"
        onClick={() => moveCurrent()}
      >
        <SVGCurrentSpot />
      </button>
    </div>
  );
}
