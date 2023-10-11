import data from '../data/timezones.json';

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

export const getTimezoneByCountryCode = (countrycode: string): Timezone[] => {
    return timezones.filter(
        (timezone) => timezone.countryCodes.findIndex(
            (code: string) => code.toLowerCase() === countrycode.toLowerCase()
        ) !== -1
    );
}

export const getTimezoneByIdentifier = (identifier: string): Timezone[] => timezones.filter(
    (timezone: Timezone) => timezone.identifier.toLowerCase().indexOf(identifier.toLowerCase()) !== -1
);

export const getTimeZoneAbbreviations = (): string[] => Array.from(
    new Set(
        timezones.flatMap(
            (entry) => entry.abbr.dst !== null
                ? [entry.abbr.dst, entry.abbr.std]
                : [entry.abbr.std]
        )
    )
).sort()

export const getTimeZoneByAbbreviation = (abbr: string): Timezone[] => timezones.filter(
    (timezone: Timezone) => Object.values(timezone.abbr).findIndex(
        (entry)=> entry?.toLowerCase() === abbr.toLowerCase()
    ) !== -1
);