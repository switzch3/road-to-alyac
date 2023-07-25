import typia from "typia";
import { Photo } from "./Photo";
import { GeoPoint, Timestamp } from "firebase/firestore";

export interface Pharmacy {
  name: string;
  photos: Photo[] | null;
  location: GeoPoint;
  address: string;
  tel: string;
  monday: [string, string];
  tuesday: [string, string];
  wednesday: [string, string];
  thursday: [string, string];
  friday: [string, string];
  saturday: [string, string];
  sunday: [string | null, string | null];
  holiday: [string | null, string | null];
  HPID: string;
  postalCode: string;
  jsonUpdatedAt: Timestamp;
}
export const assertPharmacy = typia.createAssert<Pharmacy>();
