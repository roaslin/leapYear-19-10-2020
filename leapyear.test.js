const isLeapYear = require('./leapyear.js');

// All years divisible by 100 but not by 400 are NOT leap years (so, for
//  example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be a leap year),

// All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019).

describe('leapYear should', ()=>{
    test('be divisible by 400', ()=>{
        expect(isLeapYear(1600)).toBe(true);
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear(2400)).toBe(true);
    });
    
    test('be divisble by 4 but not by 100', ()=>{
        expect(isLeapYear(2008)).toBe(true);
        expect(isLeapYear(2012)).toBe(true);
        expect(isLeapYear(2016)).toBe(true);
    });
});

describe('Not a leapYear should', ()=>{
    test('be divisible by 100 but no by 400', ()=>{
        expect(isLeapYear(1700)).toBe(false);
        expect(isLeapYear(1800)).toBe(false);
        expect(isLeapYear(1900)).toBe(false);
    });
});

