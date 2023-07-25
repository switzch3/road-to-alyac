import { Query, getDocs } from "@firebase/firestore";

export const getDocsData = <T>(
  query: Query,
  assert: (input: any) => T
): Promise<T[]> => {
  return getDocs(query).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => {
      return assert(doc.data());
    })
  );
};
