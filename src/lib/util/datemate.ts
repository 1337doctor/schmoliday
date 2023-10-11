import data from '../data/timezones.json';

interface Timezone {
    countryCodes: string[];
    identifier: string;
    offset: {
        std: null | string;
        dst: null | string;
    };
    abbr: {
      std: null | string;
      dst: null | string;
    };
}

const timezones: Timezone[] = data;

export const getTimezoneByCountryCode = (countrycode: string): Timezone[] => {
    return timezones.filter(
        (timezone) => timezone.countryCodes.findIndex(
            (code: string)=> code.toLowerCase() === countrycode.toLowerCase()
        ) !== -1
    );
}

export const getTimezoneByIdentifier = (identifier: string): Timezone[] => timezones.filter(
    (timezone: Timezone) => timezone.identifier.toLowerCase().indexOf(identifier.toLowerCase()) !== -1
);
