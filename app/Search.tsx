import SVGSearch from "@/app/components/SVGSearch";
import { useEffect, useState } from "react";
import { getPharmacies } from "@/infra/db/pharmacies";
import { Pharmacy } from "@/infra/types/Pharmacy";

export default function Search() {
  const [pharmacies, setPharmacies] = useState<(Pharmacy & { id: string })[]>(
    []
  );
  useEffect(() => {
    getPharmacies().then(setPharmacies);
  }, []);
  return (
    <div className="h-full overflow-scroll">
      <div className="sticky top-0 border-b border-gray-300/50 bg-white p-4">
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SVGSearch className="h-5 w-5" />
          </span>
          <input
            className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="약국 이름 검색"
            type="text"
            name="search"
          />
        </label>
      </div>

      <div className="">
        <ul role="list" className="divide-y divide-slate-200 p-4">
          {pharmacies.map(({ id, name, address }) => (
            <li key={id} className="flex py-4 first:pt-0 last:pb-0">
              <img
                className="h-10 w-10 rounded-full"
                src={`https://source.unsplash.com/random/${Math.random()}`}
                alt=""
              />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">{name}</p>
                <p className="truncate text-sm text-slate-500">{address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
