import {
    getIanaTimezoneByCountryCode,
    getIanaTimezoneByIdentifier,
    getIanaTimeZoneAbbreviations,
    getIanaTimeZoneByAbbreviation,
    getIntlTimezoneIdentifiers,
    filterIntlTimezoneIdentifiers,
    timezones
} from "./util/datemate.ts";


// @ts-ignore
window.datemate = {
    timezones,
    getIanaTimezoneByCountryCode,
    getIanaTimezoneByIdentifier,
    getIanaTimeZoneAbbreviations,
    getIanaTimeZoneByAbbreviation,
    getIntlTimezoneIdentifiers,
    filterIntlTimezoneIdentifiers
};