import { collection, getDocs, updateDoc } from "@firebase/firestore";
import { firestore } from "@/infra/firebase-client";

export const updateIsVisible = async () => {
  const snap = await getDocs(collection(firestore, "pharmacies"));

  for (const doc of snap.docs) {
    // await updateDoc(doc.ref, { accessibility: null });
  }

  // await setDoc(ref, { year: 2023, holidays: HOLIDAYS });
};
