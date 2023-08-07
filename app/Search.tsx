import { type ChangeEvent, useEffect, useState } from "react";
import SVGSearch from "@/app/components/SVGSearch";
import { getPharmacies } from "@/infra/db/pharmacies";
import { type Pharmacy } from "@/infra/types/Pharmacy";
import ListPharmacy from "@/app/components/ListPharmacy";

export default function Search() {
  const [pharmacies, setPharmacies] = useState<
    (Pharmacy & { id: string; isOpen: boolean | null })[]
  >([]);
  const [allPharmacies, setAllPharmacies] = useState<
    (Pharmacy & { id: string; isOpen: boolean | null })[]
  >([]);

  useEffect(() => {
    getPharmacies().then((p) => {
      setPharmacies(p);
      setAllPharmacies(p);
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

  // const handleClick = () => {}

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
              <ListPharmacy
                key={id}
                name={name}
                address={address}
                dummyAccessibility={dummyAccessibility}
                isOpen={isOpen}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}
