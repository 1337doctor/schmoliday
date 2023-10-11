import {getTimezoneByCountryCode, getTimezoneByIdentifier} from "./util/datemate.ts";


// @ts-ignore
window.datemate = {
    tzByCountryCode: getTimezoneByCountryCode,
    tzByIdentifier: getTimezoneByIdentifier,
};