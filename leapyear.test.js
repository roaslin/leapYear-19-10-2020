const isLeapYear = require('./leapyear.js');

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

    test('not be divisible by 4', ()=>{
        expect(isLeapYear(2017)).toBe(false);
        expect(isLeapYear(2018)).toBe(false);
        expect(isLeapYear(2019)).toBe(false);
    });
});

