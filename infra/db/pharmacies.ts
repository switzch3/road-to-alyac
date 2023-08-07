import { collection, query, limit } from "firebase/firestore";
import { firestore } from "@/infra/firebase-client";
import { getDocsData } from "@/infra/db-utils";
import { assertPharmacy, Pharmacy } from "../types/Pharmacy";
import addOpenToday from "@/app/addOpenToday";

export const getPharmacies = async () => {
  const ref = collection(firestore, "pharmacies");
  // Note: 쿼리 갯수 5만개 제한
  const p = await getDocsData<Pharmacy>(query(ref, limit(50)), assertPharmacy);
  return addOpenToday(p);
};
