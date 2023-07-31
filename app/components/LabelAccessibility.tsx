export default function LabelAccessibility({
  type,
}: {
  type: "accessible" | "inaccessible" | "unknown";
}) {
  const colorVariants = {
    unknown: [
      "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
      "휠체어 접근 알 수 없음",
    ],
    accessible: [
      "bg-green-50 text-green-700 ring-green-600/20",
      "휠체어 접근 가능",
    ],
    inaccessible: [
      "bg-red-50 text-red-700 ring-red-600/10",
      "휠체어 접근 불가능",
    ],
  };
  const [color, text] = colorVariants[type];
  // <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
  // <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
  // <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${color}`}
    >
      {text}
    </span>
  );
}
