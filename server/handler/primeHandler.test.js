const { checkNumbersForPrime, checkOneNumberForPrime, isNumberPrime } = require("../handler/primeHandler");


let whatToExpect = { "result":6, "isPrime":false };
let isSumPrimeResult = checkNumbersForPrime("1,2,3");
test('is "1,2,3" sum prime number, false', () => {
    expect(isSumPrimeResult).toHaveProperty('result');
    expect(isSumPrimeResult).toHaveProperty('isPrime');
    expect(isSumPrimeResult).toMatchObject(whatToExpect);
});


whatToExpect = { "result":7, "isPrime":true };
isSumPrimeResult = checkNumbersForPrime("1,2,3,1");
test('is "1,2,3,1" sum prime number, true', () => {
    expect(isSumPrimeResult).toHaveProperty('result');
    expect(isSumPrimeResult).toHaveProperty('isPrime');
    expect(isSumPrimeResult).toMatchObject(whatToExpect);
});


whatToExpect = { "isPrime":true };
const IsNumberPrimeResult = checkOneNumberForPrime(5);
test('is 5 prime number, true', () => {
    expect(IsNumberPrimeResult).toHaveProperty('isPrime');
    expect(IsNumberPrimeResult).toMatchObject(whatToExpect);
});


test('is 7 prime number, true', () => {
    expect(isNumberPrime(7)).toBe(true);
});

test('is 4 prime number, false', () => {
    expect(isNumberPrime(4)).toBe(false);
});

test('is 2 prime number, true', () => {
    expect(isNumberPrime(2)).toBe(true);
});

test('is 1 prime number, false', () => {
    expect(isNumberPrime(1)).toBe(false);
});

test('is 0 prime number, false', () => {
    expect(isNumberPrime(0)).toBe(false);
});


test('is -1 prime number, false', () => {
    expect(isNumberPrime(-1)).toBe(false);
});