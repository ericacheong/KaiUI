"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeString = exports.getPeriod = exports.getTwelveHour = exports.getDaysInMonth = void 0;
const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};
exports.getDaysInMonth = getDaysInMonth;
const getTwelveHour = (hh) => {
    let h = hh;
    if (h >= 12) {
        h = hh - 12;
    }
    if (h === 0) {
        h = 12;
    }
    return h;
};
exports.getTwelveHour = getTwelveHour;
const getPeriod = (hh) => {
    let p = "AM";
    if (hh >= 12) {
        p = "PM";
    }
    return p;
};
exports.getPeriod = getPeriod;
const getTimeString = (time) => {
    const dd = time.period;
    const h = time.hour;
    const m = time.minute;
    const mStr = m < 10 ? "0" + m : m;
    return `${h}:${mStr} ${dd}`;
};
exports.getTimeString = getTimeString;
