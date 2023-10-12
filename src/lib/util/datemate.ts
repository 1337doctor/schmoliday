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
export const getIanaTimezoneByCountryCode = (countrycode: string): Timezone[] => {
    return timezones.filter(
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
export const getIanaTimezoneByIdentifier = (identifier: string): Timezone[] => timezones.filter(
    (timezone: Timezone) => timezone.identifier.toLowerCase().indexOf(identifier.toLowerCase()) !== -1
);
export const getIanaTimeZoneAbbreviations = (): string[] => Array.from(
    new Set(
        timezones.flatMap(
            (entry) => entry.abbr.dst !== null
                ? [entry.abbr.dst, entry.abbr.std]
                : [entry.abbr.std]
        )
    )
).sort()
export const getIanaTimeZoneByAbbreviation = (abbr: string): Timezone[] => timezones.filter(
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

