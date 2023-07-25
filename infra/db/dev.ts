import data from "./yackook-data.json";
import { collection, doc, GeoPoint, setDoc } from "firebase/firestore";
import { firestore } from "@/infra/firebase-client";
import { Photo } from "@/infra/types/src/Photo";
import { assertPharmacy } from "@/infra/types/Pharmacy";

export const setData = async () => {
  // const ref = collection(firestore, "pharmacies");
  console.log("data", data);
  // name
  // address

  const filtered: JSONData[] = data.DATA.filter((d) =>
    /강남|서초/.test(d.dutyaddr)
  );

  const ref = collection(firestore, "pharmacies");

  // Note: 한개 테스트로 저장했던 것
  // const d = filtered[0];
  // const value = genValue(d);
  // return setDoc(doc(ref), value);

  //  Note: 여러개 저장
  return Promise.all(
    filtered.map((d) => {
      const value = genValue(d);
      return setDoc(doc(ref), value);
    })
  );
};

interface JSONData {
  dutyaddr: string;
  dutyname: string;
  dutytel1: string;
  dutytime1s: string;
  dutytime1c: string;
  dutytime2s: string;
  dutytime2c: string;
  dutytime3s: string;
  dutytime3c: string;
  dutytime4s: string;
  dutytime4c: string;
  dutytime5s: string;
  dutytime5c: string;
  dutytime6s: string;
  dutytime6c: string;
  dutytime7s: string | null;
  dutytime7c: string | null;
  dutytime8s: string | null;
  dutytime8c: string | null;
  hpid: string;
  postcdn1: string;
  postcdn2: string;
  wgs84lat: string;
  wgs84lon: string;
  work_dttm: number;
}

function genValue(d: JSONData) {
  const {
    dutyaddr, // 주소
    dutyname, // 이름
    dutytel1, // 전화번호
    hpid, // 약국ID
    dutytime1s,
    dutytime1c,
    dutytime2s,
    dutytime2c,
    dutytime3s,
    dutytime3c,
    dutytime4s,
    dutytime4c,
    dutytime5s,
    dutytime5c,
    dutytime6s,
    dutytime6c,
    dutytime7s,
    dutytime7c,
    dutytime8s,
    dutytime8c,
    postcdn1,
    postcdn2,
    wgs84lat,
    wgs84lon,
    work_dttm,
  } = d;
  const lat = parseFloat(wgs84lat);
  const lon = parseFloat(wgs84lon);

  const createValue = {
    name: dutyname,
    address: dutyaddr,
    tel: dutytel1,
    monday: [dutytime1s, dutytime1c],
    tuesday: [dutytime2s, dutytime2c],
    wednesday: [dutytime3s, dutytime3c],
    thursday: [dutytime4s, dutytime4c],
    friday: [dutytime5s, dutytime5c],
    saturday: [dutytime6s, dutytime6c],
    sunday: [dutytime7s, dutytime7c],
    holiday: [dutytime8s, dutytime8c],
    HPID: hpid,
    postalCode: postcdn1 + postcdn2,
    jsonUpdatedAt: new Date(work_dttm),
    location: new GeoPoint(lat, lon),
    photos: null,
  };

  return assertPharmacy(createValue);
}
