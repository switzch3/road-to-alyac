import { Pharmacy } from "@/infra/types/Pharmacy";
import { HOLIDAYS } from "@/lib/Holidays";
import dayjs from "dayjs";
type Days =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export default function addOpenToday(
  pharmacies: (Pharmacy & { id: string })[]
): (Pharmacy & { id: string; isOpen: boolean | null })[] {
  const today = dayjs();
  const yearMonthDay = today.format("YYYY-MM-DD");

  const day = today.format("dddd").toLowerCase() as Days;
  const hourMinute = today.format("HHmm").toLowerCase();

  return pharmacies.map((p) => {
    let isOpen;
    const holiday = HOLIDAYS[yearMonthDay as keyof typeof HOLIDAYS] as
      | string
      | undefined;
    const isHoliday = !!holiday;

    const workingDay = isHoliday ? "holiday" : day;
    const [start, end] = p[workingDay];

    if (!start || !end) {
      isOpen = null;
    } else {
      isOpen =
        parseInt(start) <= parseInt(hourMinute) &&
        parseInt(hourMinute) <= parseInt(end);
    }

    return {
      ...p,
      isOpen,
    };
  });
}
