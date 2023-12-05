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
export const getIanaTimezoneByCountryCode = (countrycode: string, tzList: Timezone[] = timezones): Timezone[] => {
    if(countrycode.length < 2) {
        console.info('getIanaTimezoneByCountryCode: countryCode hast at least to be 2 characters long.')
        return [];
    }
    return tzList.filter(
        (timezone) => timezone.countryCodes.findIndex(
            (code: string) => countrycode.toLowerCase().indexOf(
                code.toLowerCase()
            ) !== -1
        ) !== -1
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

export const getAbbrFromIanaTimeZone = (timezone: Timezone, date: Date) => date.isDst() && timezone.abbr.dst
    ? timezone.abbr.dst : timezone.abbr.std;

export const getIanaTimezonesWithoutDST = (): Timezone[] => timezones.filter(
    (timezone) => timezone.abbr.dst === null
);
export const getIanaTimezonesWithDST = (): Timezone[] => timezones.filter(
    (timezone) => timezone.abbr.dst !== null
);
