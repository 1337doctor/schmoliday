import {
    getIanaTimezoneByCountryCode,
    getIanaTimezoneByIdentifier,
    getIanaTimeZoneAbbreviations,
    getIanaTimeZoneByAbbreviation,
    getIanaTimezonesWithoutDST,
    timezones,
    getAbbrFromIanaTimeZone,
    getIanaTimezonesWithDST
} from "./util/datemate.ts";
import {intlLocaleId, getIntlCanonicalLocaleId, getIntlTimezoneIdentifiers, filterIntlTimezoneIdentifiers, intlTimezone} from "./util/intl.ts";
import { easterSpencer, goodFriday, easterSundayCurrentYear, palmSunday } from "./util/schmoliday.ts";
import './util/dateproto.ts';

const main = (): void => {
    if (typeof Intl === 'undefined') {
        console.error('Intl not found. Upgrade your f*cking browser.');
        return;
    }
    // @ts-ignore
    window.datemate = {
        timezones,
        intlLocaleId,
        getIanaTimezoneByCountryCode,
        getIanaTimezoneByIdentifier,
        getIanaTimeZoneAbbreviations,
        getIanaTimeZoneByAbbreviation,
        getIntlTimezoneIdentifiers,
        filterIntlTimezoneIdentifiers,
        getIanaTimezonesWithoutDST,
        getIanaTimezonesWithDST,
        getIntlCanonicalLocaleId,
        intlTimezone,
        getAbbrFromIanaTimeZone,
        easterSpencer,
        goodFriday,
        palmSunday,
        easterSundayCurrentYear
    };
}

main();