interface Date {
    addDays(days: number): Date;
    addYears(years: number): Date;
    addMonths(months: number): Date;
    isDst(): boolean;
}

Date.prototype.isDst = function(): boolean {
    const january = new Date(this.getFullYear(), 0, 1);
    const july = new Date(this.getFullYear(), 6, 1);
    const stdOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());

    return this.getTimezoneOffset() < stdOffset;
}


Date.prototype.addDays = function(days: number) {
    const date: Date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addYears = function(years: number) {
    const date: Date = new Date(this.valueOf());
    date.setFullYear(date.getFullYear() + years);
    return date;
}

Date.prototype.addMonths = function(months: number) {
    const date: Date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + months);
    return date;
}