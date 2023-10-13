import {
    getIanaTimezoneByCountryCode,
    getIanaTimezoneByIdentifier,
    getIanaTimeZoneAbbreviations,
    getIanaTimeZoneByAbbreviation,
    getIntlTimezoneIdentifiers,
    getIanaTimezonesWithoutDST,
    filterIntlTimezoneIdentifiers,
    dateIsDst,
    timezones,
    getIanaTimezoneByLocaleFilterIdentifier, getAbbrFromIanaTimeZone, getIanaTimezonesWithDST
} from "./util/datemate.ts";
import {locale, canonicalLocale} from "./util/intl.ts";
import { easterSpencer } from "./util/schmoliday.ts";

const main = (): void => {
    if (typeof Intl === 'undefined') {
        console.error('Intl not found. Upgrade your f*cking browser.');
        return;
    }
    // @ts-ignore
    window.datemate = {
        timezones,
        locale,
        getIanaTimezoneByCountryCode,
        getIanaTimezoneByIdentifier,
        getIanaTimeZoneAbbreviations,
        getIanaTimeZoneByAbbreviation,
        getIntlTimezoneIdentifiers,
        filterIntlTimezoneIdentifiers,
        getIanaTimezonesWithoutDST,
        getIanaTimezonesWithDST,
        dateIsDst,
        canonicalLocale,
        getIanaTimezoneByLocaleFilterIdentifier,
        getAbbrFromIanaTimeZone,
        easterSpencer
    };
}

main();