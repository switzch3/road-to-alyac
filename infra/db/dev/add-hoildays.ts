import { firestore } from "@/infra/firebase-client";
import { collection } from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const HOLIDAYS = {
  "2023-01-01": "1월 1일",
  "2023-01-21": "설날 전날",
  "2023-01-22": "설날",
  "2023-01-23": "설날 다음 날",
  "2023-01-24": "대체공휴일(설날)",
  "2023-03-01": "3ㆍ1절",
  "2023-05-05": "어린이날",
  "2023-05-27": "부처님 오신 날",
  "2023-05-29": "대체공휴일(부처님 오신 날)",
  "2023-06-06": "현충일",
  "2023-08-15": "광복절",
  "2023-09-28": "추석 전날",
  "2023-09-29": "추석",
  "2023-09-30": "추석 다음 날",
  "2023-10-03": "개천절",
  "2023-10-09": "한글날",
  "2023-12-25": "기독탄신일",
};

export const setHolidays = async () => {
  const ref = doc(collection(firestore, "metadata"));

  // await setDoc(ref, { year: 2023, holidays: HOLIDAYS });
};
