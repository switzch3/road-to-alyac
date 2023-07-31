import { type ChangeEvent, useEffect, useState } from "react";
import SVGSearch from "@/app/components/SVGSearch";
import { getPharmacies } from "@/infra/db/pharmacies";
import { type Pharmacy } from "@/infra/types/Pharmacy";
import LabelAccessibility from "@/app/components/LabelAccessibility";
import addOpenToday from "@/app/addOpenToday";

export default function Search() {
  const [pharmacies, setPharmacies] = useState<
    (Pharmacy & { id: string; isOpen: boolean | null })[]
  >([]);
  const [allPharmacies, setAllPharmacies] = useState<
    (Pharmacy & { id: string; isOpen: boolean | null })[]
  >([]);

  useEffect(() => {
    getPharmacies().then((p) => {
      setPharmacies(addOpenToday(p));
      setAllPharmacies(addOpenToday(p));
    });
  }, []);

  const handleChange = (v: ChangeEvent<HTMLInputElement>) => {
    const value = v.target.value;
    if (value) {
      const searchWord = new RegExp(value, "g");
      const result = allPharmacies.filter((p) => searchWord.test(p.name));
      setPharmacies(result);
    } else {
      setPharmacies(allPharmacies);
    }
  };

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
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="">
        <ul role="list" className="divide-y divide-slate-200 p-4">
          {pharmacies.map(
            ({ id, name, address, dummyAccessibility, isOpen }) => (
              <li key={id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  {/*<img*/}
                  {/*  className="h-12 w-12 flex-none rounded-full bg-gray-50"*/}
                  {/*  src={`https://source.unsplash.com/random/${Math.random()}`}*/}
                  {/*  alt=""*/}
                  {/*/>*/}
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {name}
                    </p>
                    <LabelAccessibility type={dummyAccessibility} />
                    {isOpen ? (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          영업중
                        </p>
                      </div>
                    ) : (
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        닫음
                      </p>
                    )}
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address}
                    </p>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
