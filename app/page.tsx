import { Metadata } from "next";
import Main from "@/app/Main";

export const metadata: Metadata = {
  title: "Road To ALYAC - 휠체어 사용자의 약국 찾기",
};
export default function Home() {
  return <Main />;
}
