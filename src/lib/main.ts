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
    getIanaTimezoneByLocaleAndIdentifier, getAbbrFromIanaTimeZone, getIanaTimezonesWithDST
} from "./util/datemate.ts";
import {locale, canonicalLocale} from "./util/intl.ts";

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
        getIanaTimezoneByLocaleAndIdentifier,
        getAbbrFromIanaTimeZone
    };
}

main();