function leapYear(number) {

    if(isDivisibleBy100(number) && !isDivisibleBy400(number)){
        return false;
    }

    if(isDivisibleBy4(number) && !isDivisibleBy100(number)){
        return true;
    }

    if(isDivisibleBy400(number)){
        return true;
    }

    return false;
}

module.exports = leapYear;

function isDivisibleBy4(number) {
    return number % 4 === 0;
}

function isDivisibleBy100(number) {
    return number % 100 === 0;
}

function isDivisibleBy400(number) {
    return number % 400 === 0;
}
