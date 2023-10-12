export type LocaleString = `${string}-${string}` | string;


export const STATIC_FALLBACK_LOCALE: LocaleString = 'en-US';

export const getLocale = (): LocaleString => {
    const intlLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    if (intlLocale) return intlLocale;
    else {
        console.warn(`Could not get locale from Intl. Using Fallback: ${STATIC_FALLBACK_LOCALE}.`);
        return STATIC_FALLBACK_LOCALE;
    }
}

export const locale: LocaleString = getLocale();

export const canonicalLocale = (locale: LocaleString): LocaleString => {
    const [intlLocale] = Intl.DateTimeFormat.supportedLocalesOf(locale);
    if (intlLocale?.length > 0) return intlLocale;
    else {
        console.warn(`Could not get locale from Intl. Using Fallback: ${STATIC_FALLBACK_LOCALE}.`);
        return STATIC_FALLBACK_LOCALE;
    }
}

