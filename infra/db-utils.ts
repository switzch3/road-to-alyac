import { Query, getDocs } from "@firebase/firestore";

export const getDocsData = <T>(
  query: Query,
  assert: (input: any) => T
): Promise<(T & { id: string })[]> => {
  return getDocs(query).then((querySnapshot) =>
    querySnapshot.docs.map((doc) => {
      const data = assert(doc.data());
      return { ...data, id: doc.id };
    })
  );
};
