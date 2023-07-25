"use client";

import Map from "@/app/Map";
import Search from "@/app/Search";
import { useState } from "react";
import SVGMap from "@/app/components/SVGMap";
import SVGSearch from "@/app/components/SVGSearch";

export default function Main() {
  const [tab, setTab] = useState<"map" | "search">("search");

  return (
    <main className="flex h-[100dvh] items-center justify-center">
      <div className="relative h-full w-full divide-y divide-gray-300/50 lg:h-4/6 lg:w-2/4">
        {/*h-full - h14*/}
        <div className="h-[calc(100%-3.5rem)] outline-none">
          {tab === "map" && <Map />}
          {tab === "search" && <Search />}
        </div>

        <div className="absolute bottom-0 h-14 w-full columns-2">
          <div className="flex h-full justify-center">
            <button onClick={() => setTab("map")}>
              <SVGMap />
            </button>
          </div>
          <div className="flex h-full justify-center">
            <button onClick={() => setTab("search")}>
              <SVGSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
