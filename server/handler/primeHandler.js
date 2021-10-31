
const checkNumbersForPrime = (numbers) => {
    const numbersMatch = /\d+/g;
    const numsArray = numbers.match(numbersMatch);

    let sum = numsArray.reduce((a, b) => a + parseInt(b), 0);

    const isPrime = isNumberPrime(sum);

    return { "result":sum, "isPrime":isPrime };
};

const checkOneNumberForPrime = (number) => {
    const isPrime = isNumberPrime(number);

    return { "isPrime":isPrime };
};

const isNumberPrime = (number) => {
    if (number <= 1) { return false; }

    for (let divisor = 2; divisor < number; divisor++) {
        if( number % divisor == 0) {
            return false;
        }
    }
    return true;
};

module.exports = {
    checkNumbersForPrime,
    checkOneNumberForPrime,
    isNumberPrime
};