import { random } from "lodash";
import { firestore } from "@/infra/firebase-client";
import {
  collection,
  getDoc,
  getDocs,
  updateDoc,
  deleteField,
} from "@firebase/firestore";

export const addDummyAccessible = async () => {
  const ref = collection(firestore, "pharmacies");

  const snapshot = await getDocs(ref);

  const r = random(0, 2);
  let dummyAccessibility;
  switch (r) {
    case 0:
      dummyAccessibility = "accessible";
      break;
    case 1:
      dummyAccessibility = "inaccessible";
      break;
    case 2:
      dummyAccessibility = "unknown";
      break;
  }
  for (const doc of snapshot.docs) {
    // await updateDoc(doc.ref, {
    //   dummyAccessibility,
    //   dummyAccessible: deleteField(),
    // });
  }
};
