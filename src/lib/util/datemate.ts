import data from '../data/timezones.json';
import {locale as intlLocale, LocaleString} from "./intl.ts";

interface Timezone {
    countryCodes: string[];
    identifier: string;
    offset: {
        std: string;
        dst: null | string;
    };
    abbr: {
        std: string;
        dst: null | string;
    };
}

export const timezones: Timezone[] = data;
export const getIanaTimezoneByCountryCode = (countrycode: string, tzList: Timezone[] = timezones): Timezone[] => {
    return tzList.filter(
        (timezone) => {
            const countrycodeLowered = countrycode.toLowerCase();
            return timezone.countryCodes.findIndex(
                (code: string) => {
                    const codeLowered = code.toLowerCase();
                    return codeLowered === countrycodeLowered || countrycodeLowered.indexOf(codeLowered) !== -1;
                }
            ) !== -1
        }
    );
}
export const getIanaTimezoneByIdentifier = (identifier: string, tzList: Timezone[] = timezones): Timezone[] => tzList.filter(
    (timezone: Timezone) => timezone.identifier.toLowerCase().indexOf(identifier.toLowerCase()) !== -1
);
export const getIanaTimeZoneAbbreviations = (tzList: Timezone[] = timezones): string[] => Array.from(
    new Set(
        tzList.flatMap(
            (entry) => entry.abbr.dst !== null
                ? [entry.abbr.dst, entry.abbr.std]
                : [entry.abbr.std]
        )
    )
).sort()
export const getIanaTimeZoneByAbbreviation = (abbr: string, tzList: Timezone[] = timezones): Timezone[] => tzList.filter(
    (timezone: Timezone) => Object.values(timezone.abbr).findIndex(
        (entry) => entry?.toLowerCase() === abbr.toLowerCase()
    ) !== -1
);
// @ts-ignore
export const getIntlTimezoneIdentifiers = (): string[] => Intl.supportedValuesOf('timeZone');
export const filterIntlTimezoneIdentifiers = (needle: string): string[] => getIntlTimezoneIdentifiers().filter(
    (entry) => entry.toLowerCase().indexOf(needle.toLowerCase()) !== -1
);
export const dateIsDst = (date: Date = new Date()): boolean => {
    const january = new Date(date.getFullYear(), 0, 1);
    const july = new Date(date.getFullYear(), 6, 1);
    const stdOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());

    return date.getTimezoneOffset() < stdOffset;
}

export const getIanaTimezoneByLocaleAndIdentifier = (identifier: string, locale: LocaleString = intlLocale): Timezone[] => {
    return getIanaTimezoneByCountryCode(locale).filter(
        (timezone) => timezone.identifier.toLowerCase().indexOf(identifier.toLowerCase()) !== -1
    );
}

export const getAbbrFromIanaTimeZone = (timezone: Timezone, date: Date) => dateIsDst(date) && timezone.abbr.dst
    ? timezone.abbr.dst : timezone.abbr.std;

export const getIanaTimezonesWithoutDST = (): Timezone[] => timezones.filter(
    (timezone) => timezone.abbr.dst === null
);
export const getIanaTimezonesWithDST = (): Timezone[] => timezones.filter(
    (timezone) => timezone.abbr.dst !== null
);