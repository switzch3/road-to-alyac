import { collection, query, limit } from "firebase/firestore";
import { firestore } from "@/infra/firebase-client";
import { getDocsData } from "@/infra/db-utils";
import { assertPharmacy } from "../types/Pharmacy";

export const getPharmacies = async () => {
  const ref = collection(firestore, "pharmacies");
  // Note: 쿼리 갯수 5만개 제한
  return getDocsData(query(ref, limit(100)), assertPharmacy);
};
