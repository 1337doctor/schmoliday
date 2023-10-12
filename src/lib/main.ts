import {
    getIanaTimezoneByCountryCode,
    getIanaTimezoneByIdentifier,
    getIanaTimeZoneAbbreviations,
    getIanaTimeZoneByAbbreviation,
    getIntlTimezoneIdentifiers,
    filterIntlTimezoneIdentifiers,
    dateIsDst,
    timezones,
    getIanaTimezoneByLocaleAndIdentifier
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
        dateIsDst,
        canonicalLocale,
        getIanaTimezoneByLocaleAndIdentifier
    };
}

main();