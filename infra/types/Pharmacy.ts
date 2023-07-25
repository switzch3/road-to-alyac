import typia from "typia";
import { Photo } from "./Photo";
import { GeoPoint, Timestamp } from "firebase/firestore";
export interface Pharmacy {
    name: string;
    photos: Photo[] | null;
    location: GeoPoint;
    address: string;
    tel: string;
    monday: [
        string,
        string
    ];
    tuesday: [
        string,
        string
    ];
    wednesday: [
        string,
        string
    ];
    thursday: [
        string,
        string
    ];
    friday: [
        string,
        string
    ];
    saturday: [
        string,
        string
    ];
    sunday: [
        string | null,
        string | null
    ];
    holiday: [
        string | null,
        string | null
    ];
    HPID: string;
    postalCode: string;
    jsonUpdatedAt: Timestamp;
}
export const assertPharmacy = (input: any): Pharmacy => {
    const __is = (input: any): input is Pharmacy => {
        const $io0 = (input: any): boolean => "string" === typeof input.name && (null === input.photos || Array.isArray(input.photos) && input.photos.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && ("object" === typeof input.location && null !== input.location && true) && "string" === typeof input.address && "string" === typeof input.tel && (Array.isArray(input.monday) && (input.monday.length === 2 && "string" === typeof input.monday[0] && "string" === typeof input.monday[1])) && (Array.isArray(input.tuesday) && (input.tuesday.length === 2 && "string" === typeof input.tuesday[0] && "string" === typeof input.tuesday[1])) && (Array.isArray(input.wednesday) && (input.wednesday.length === 2 && "string" === typeof input.wednesday[0] && "string" === typeof input.wednesday[1])) && (Array.isArray(input.thursday) && (input.thursday.length === 2 && "string" === typeof input.thursday[0] && "string" === typeof input.thursday[1])) && (Array.isArray(input.friday) && (input.friday.length === 2 && "string" === typeof input.friday[0] && "string" === typeof input.friday[1])) && (Array.isArray(input.saturday) && (input.saturday.length === 2 && "string" === typeof input.saturday[0] && "string" === typeof input.saturday[1])) && (Array.isArray(input.sunday) && (input.sunday.length === 2 && (null === input.sunday[0] || "string" === typeof input.sunday[0]) && (null === input.sunday[1] || "string" === typeof input.sunday[1]))) && (Array.isArray(input.holiday) && (input.holiday.length === 2 && (null === input.holiday[0] || "string" === typeof input.holiday[0]) && (null === input.holiday[1] || "string" === typeof input.holiday[1]))) && "string" === typeof input.HPID && "string" === typeof input.postalCode && ("object" === typeof input.jsonUpdatedAt && null !== input.jsonUpdatedAt && ("number" === typeof (input.jsonUpdatedAt as any).seconds && "number" === typeof (input.jsonUpdatedAt as any).nanoseconds));
        const $io1 = (input: any): boolean => "string" === typeof input.downloadURL;
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Pharmacy => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && (null === input.photos || (Array.isArray(input.photos) || $guard(_exceptionable, {
                path: _path + ".photos",
                expected: "(Array<Photo> | null)",
                value: input.photos
            })) && input.photos.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".photos[" + _index1 + "]",
                expected: "Photo",
                value: elem
            })) && $ao1(elem, _path + ".photos[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".photos[" + _index1 + "]",
                expected: "Photo",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".photos",
                expected: "(Array<Photo> | null)",
                value: input.photos
            })) && (("object" === typeof input.location && null !== input.location && false === Array.isArray(input.location) || $guard(_exceptionable, {
                path: _path + ".location",
                expected: "GeoPoint",
                value: input.location
            })) && $ao2(input.location, _path + ".location", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".location",
                expected: "GeoPoint",
                value: input.location
            })) && ("string" === typeof input.address || $guard(_exceptionable, {
                path: _path + ".address",
                expected: "string",
                value: input.address
            })) && ("string" === typeof input.tel || $guard(_exceptionable, {
                path: _path + ".tel",
                expected: "string",
                value: input.tel
            })) && ((Array.isArray(input.monday) || $guard(_exceptionable, {
                path: _path + ".monday",
                expected: "[string, string]",
                value: input.monday
            })) && ((input.monday.length === 2 || $guard(_exceptionable, {
                path: _path + ".monday",
                expected: "[string, string]",
                value: input.monday
            })) && ("string" === typeof input.monday[0] || $guard(_exceptionable, {
                path: _path + ".monday[0]",
                expected: "string",
                value: input.monday[0]
            })) && ("string" === typeof input.monday[1] || $guard(_exceptionable, {
                path: _path + ".monday[1]",
                expected: "string",
                value: input.monday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".monday",
                expected: "[string, string]",
                value: input.monday
            })) && ((Array.isArray(input.tuesday) || $guard(_exceptionable, {
                path: _path + ".tuesday",
                expected: "[string, string]",
                value: input.tuesday
            })) && ((input.tuesday.length === 2 || $guard(_exceptionable, {
                path: _path + ".tuesday",
                expected: "[string, string]",
                value: input.tuesday
            })) && ("string" === typeof input.tuesday[0] || $guard(_exceptionable, {
                path: _path + ".tuesday[0]",
                expected: "string",
                value: input.tuesday[0]
            })) && ("string" === typeof input.tuesday[1] || $guard(_exceptionable, {
                path: _path + ".tuesday[1]",
                expected: "string",
                value: input.tuesday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".tuesday",
                expected: "[string, string]",
                value: input.tuesday
            })) && ((Array.isArray(input.wednesday) || $guard(_exceptionable, {
                path: _path + ".wednesday",
                expected: "[string, string]",
                value: input.wednesday
            })) && ((input.wednesday.length === 2 || $guard(_exceptionable, {
                path: _path + ".wednesday",
                expected: "[string, string]",
                value: input.wednesday
            })) && ("string" === typeof input.wednesday[0] || $guard(_exceptionable, {
                path: _path + ".wednesday[0]",
                expected: "string",
                value: input.wednesday[0]
            })) && ("string" === typeof input.wednesday[1] || $guard(_exceptionable, {
                path: _path + ".wednesday[1]",
                expected: "string",
                value: input.wednesday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".wednesday",
                expected: "[string, string]",
                value: input.wednesday
            })) && ((Array.isArray(input.thursday) || $guard(_exceptionable, {
                path: _path + ".thursday",
                expected: "[string, string]",
                value: input.thursday
            })) && ((input.thursday.length === 2 || $guard(_exceptionable, {
                path: _path + ".thursday",
                expected: "[string, string]",
                value: input.thursday
            })) && ("string" === typeof input.thursday[0] || $guard(_exceptionable, {
                path: _path + ".thursday[0]",
                expected: "string",
                value: input.thursday[0]
            })) && ("string" === typeof input.thursday[1] || $guard(_exceptionable, {
                path: _path + ".thursday[1]",
                expected: "string",
                value: input.thursday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".thursday",
                expected: "[string, string]",
                value: input.thursday
            })) && ((Array.isArray(input.friday) || $guard(_exceptionable, {
                path: _path + ".friday",
                expected: "[string, string]",
                value: input.friday
            })) && ((input.friday.length === 2 || $guard(_exceptionable, {
                path: _path + ".friday",
                expected: "[string, string]",
                value: input.friday
            })) && ("string" === typeof input.friday[0] || $guard(_exceptionable, {
                path: _path + ".friday[0]",
                expected: "string",
                value: input.friday[0]
            })) && ("string" === typeof input.friday[1] || $guard(_exceptionable, {
                path: _path + ".friday[1]",
                expected: "string",
                value: input.friday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".friday",
                expected: "[string, string]",
                value: input.friday
            })) && ((Array.isArray(input.saturday) || $guard(_exceptionable, {
                path: _path + ".saturday",
                expected: "[string, string]",
                value: input.saturday
            })) && ((input.saturday.length === 2 || $guard(_exceptionable, {
                path: _path + ".saturday",
                expected: "[string, string]",
                value: input.saturday
            })) && ("string" === typeof input.saturday[0] || $guard(_exceptionable, {
                path: _path + ".saturday[0]",
                expected: "string",
                value: input.saturday[0]
            })) && ("string" === typeof input.saturday[1] || $guard(_exceptionable, {
                path: _path + ".saturday[1]",
                expected: "string",
                value: input.saturday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".saturday",
                expected: "[string, string]",
                value: input.saturday
            })) && ((Array.isArray(input.sunday) || $guard(_exceptionable, {
                path: _path + ".sunday",
                expected: "[string | null, string | null]",
                value: input.sunday
            })) && ((input.sunday.length === 2 || $guard(_exceptionable, {
                path: _path + ".sunday",
                expected: "[(null | string), (null | string)]",
                value: input.sunday
            })) && (null === input.sunday[0] || "string" === typeof input.sunday[0] || $guard(_exceptionable, {
                path: _path + ".sunday[0]",
                expected: "(null | string)",
                value: input.sunday[0]
            })) && (null === input.sunday[1] || "string" === typeof input.sunday[1] || $guard(_exceptionable, {
                path: _path + ".sunday[1]",
                expected: "(null | string)",
                value: input.sunday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".sunday",
                expected: "[string | null, string | null]",
                value: input.sunday
            })) && ((Array.isArray(input.holiday) || $guard(_exceptionable, {
                path: _path + ".holiday",
                expected: "[string | null, string | null]",
                value: input.holiday
            })) && ((input.holiday.length === 2 || $guard(_exceptionable, {
                path: _path + ".holiday",
                expected: "[(null | string), (null | string)]",
                value: input.holiday
            })) && (null === input.holiday[0] || "string" === typeof input.holiday[0] || $guard(_exceptionable, {
                path: _path + ".holiday[0]",
                expected: "(null | string)",
                value: input.holiday[0]
            })) && (null === input.holiday[1] || "string" === typeof input.holiday[1] || $guard(_exceptionable, {
                path: _path + ".holiday[1]",
                expected: "(null | string)",
                value: input.holiday[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".holiday",
                expected: "[string | null, string | null]",
                value: input.holiday
            })) && ("string" === typeof input.HPID || $guard(_exceptionable, {
                path: _path + ".HPID",
                expected: "string",
                value: input.HPID
            })) && ("string" === typeof input.postalCode || $guard(_exceptionable, {
                path: _path + ".postalCode",
                expected: "string",
                value: input.postalCode
            })) && (("object" === typeof input.jsonUpdatedAt && null !== input.jsonUpdatedAt || $guard(_exceptionable, {
                path: _path + ".jsonUpdatedAt",
                expected: "Timestamp",
                value: input.jsonUpdatedAt
            })) && $ao3(input.jsonUpdatedAt, _path + ".jsonUpdatedAt", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".jsonUpdatedAt",
                expected: "Timestamp",
                value: input.jsonUpdatedAt
            }));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.downloadURL || $guard(_exceptionable, {
                path: _path + ".downloadURL",
                expected: "string",
                value: input.downloadURL
            });
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true;
            const $ao3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.seconds || $guard(_exceptionable, {
                path: _path + ".seconds",
                expected: "number",
                value: input.seconds
            })) && ("number" === typeof input.nanoseconds || $guard(_exceptionable, {
                path: _path + ".nanoseconds",
                expected: "number",
                value: input.nanoseconds
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "Pharmacy",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "Pharmacy",
                value: input
            });
        })(input, "$input", true);
    return input;
};
