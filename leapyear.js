function leapYear(number) {
    if(number % 400 === 0){
        return true;
    }
    
    return false;
}

module.exports = leapYear;