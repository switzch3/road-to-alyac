"use client";

import Map from "@/app/Map";
import Search from "@/app/Search";
import { useState } from "react";
import SVGMap from "@/app/components/SVGMap";
import SVGSearch from "@/app/components/SVGSearch";

export default function Main() {
  const [tab, setTab] = useState<"map" | "search">("search");

  return (
    <>
      <div className="h-full">
        {tab === "map" && <Map />}
        {tab === "search" && <Search />}
      </div>
      <div className="fixed bottom-0 w-96 h-10 columns-2">
        <div className="h-full flex justify-center">
          <button onClick={() => setTab("map")}>
            <SVGMap />
          </button>
        </div>
        <div className="h-full flex justify-center">
          <button onClick={() => setTab("search")}>
            <SVGSearch />
          </button>
        </div>
      </div>
    </>
  );
}
