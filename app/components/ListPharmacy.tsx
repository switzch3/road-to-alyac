import LabelAccessibility from "@/app/components/LabelAccessibility";
import type { ReactNode } from "react";

export default function ListPharmacy({
  name,
  address,
  dummyAccessibility,
  isOpen,
  children,
}: {
  name: string;
  address: string;
  dummyAccessibility: "accessible" | "inaccessible" | "unknown";
  isOpen: boolean | null;
  children?: ReactNode;
}) {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        {children}
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
              <p className="text-xs leading-5 text-gray-500">영업중</p>
            </div>
          ) : (
            <p className="mt-1 text-xs leading-5 text-gray-500">닫음</p>
          )}
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {address}
          </p>
        </div>
      </div>
    </li>
  );
}

//
// {/*<img*/}
// {/*  className="h-12 w-12 flex-none rounded-full bg-gray-50"*/}
// {/*  src={`https://source.unsplash.com/random/${Math.random()}`}*/}
// {/*  alt=""*/}
// {/*  onClick={handleClick}*/}
// {/*/>*/}
// <RcImage.PreviewGroup
//   items={[
//     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   ]}
// >
//   <RcImage src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
// </RcImage.PreviewGroup>
