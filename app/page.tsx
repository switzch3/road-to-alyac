import Main from "@/app/Main";
import SVGSearch from "@/app/components/SVGSearch";
import SVGMap from "@/app/components/SVGMap";

export default function Home() {
  return (
    <main className="flex justify-center items-center relative">
      <div className="w-96 h-screen">
        <div className="h-full divide-y divide-gray-300/50">
          <Main />
        </div>
      </div>
    </main>
  );
}
