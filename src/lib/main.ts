import {
    getTimezoneByCountryCode,
    getTimezoneByIdentifier,
    getTimeZoneAbbreviations,
    getTimeZoneByAbbreviation,
    timezones
} from "./util/datemate.ts";


// @ts-ignore
window.datemate = {
    timezones,
    getTimezoneByCountryCode,
    getTimezoneByIdentifier,
    getTimeZoneAbbreviations,
    getTimeZoneByAbbreviation,
};