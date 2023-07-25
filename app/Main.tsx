"use client";

import Map from "@/app/Map";
import Search from "@/app/Search";
import { useState } from "react";
import SVGMap from "@/app/components/SVGMap";
import SVGSearch from "@/app/components/SVGSearch";

export default function Main() {
  const [tab, setTab] = useState<"map" | "search">("search");

  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="w-full lg:w-2/4 h-full lg:h-4/6 relative">
        {/*h-full - h14*/}
        <div className="h-[calc(100%-3.5rem)] outline-none">
          {tab === "map" && <Map />}
          {tab === "search" && <Search />}
        </div>

        <div className="absolute w-full bottom-0 h-14 columns-2">
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
      </div>
    </main>
  );
}
