
const checkNumbersForPrime = (numbers) => {
    const numbersMatch = /\d+/g;
    const numsArray = numbers.match(numbersMatch);

    let sum = numsArray.reduce((a, b) => a + parseInt(b), 0);

    const isPrime = isNumberPrime(sum);

    return { "result":sum, "isPrime":isPrime }
}

const checkOneNumberForPrime = (number) => {
    const isPrime = isNumberPrime(number);

    return { "isPrime":isPrime }
}

const isNumberPrime = (number) => {
    if (number <= 1) { return false; }

    const regex = /^.?$|^(..+?)\1+$/;
    return !regex.test('1'.repeat(number));
}

module.exports = {
    checkNumbersForPrime,
    checkOneNumberForPrime,
    isNumberPrime
}