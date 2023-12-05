export type LocaleString = `${string}-${string}` | string;


export const STATIC_FALLBACK_LOCALE_ID: LocaleString = 'en-US';


export const getIntlLocaleId = (): LocaleString => {
    const intlLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    if (intlLocale) return intlLocale;
    else {
        console.warn(`Could not get locale from Intl. Using Fallback: ${STATIC_FALLBACK_LOCALE_ID}.`);
        return STATIC_FALLBACK_LOCALE_ID;
    }
}

export const intlLocaleId: LocaleString = getIntlLocaleId();

export const getIntlCanonicalLocaleId = (locale: LocaleString): LocaleString => {
    const [intlLocaleId] = Intl.DateTimeFormat.supportedLocalesOf(locale);
    if (intlLocaleId?.length > 0) return intlLocaleId;
    else {
        console.warn(`Could not get locale from Intl. Using Fallback: ${STATIC_FALLBACK_LOCALE_ID}.`);
        return STATIC_FALLBACK_LOCALE_ID;
    }
}

// @ts-ignore
export const getIntlTimezoneIdentifiers = (): string[] => Intl.supportedValuesOf('timeZone');

export const intlTimezone= Intl.DateTimeFormat().resolvedOptions().timeZone;

export const filterIntlTimezoneIdentifiers = (needle: string): string[] => getIntlTimezoneIdentifiers().filter(
    (entry) => entry.toLowerCase().indexOf(needle.toLowerCase()) !== -1
);
