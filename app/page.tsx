import { Metadata } from "next";
import Main from "@/app/Main";

export const metadata: Metadata = {
  title: "메디램프 - 휠체어 이용자의 접근 가능한 약국 찾기",
};
export default function Home() {
  return <Main />;
}
