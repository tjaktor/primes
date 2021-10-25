import React from "react";

export const ShowPrime = (props) => {
    let primeMessage = "NOT PRIME";
    
    if (props.isPrime) {
        primeMessage = "PRIME!";
    } else {
        primeMessage = "NOT PRIME!";
    }

    return <div>{props.number} is {primeMessage}</div>
}

export const ShowSumPrime = (props) => {
    let primeMessage = "NOT PRIME";
    
    if (props.isPrime) {
        primeMessage = "PRIME!";
    } else {
        primeMessage = "NOT PRIME!";
    }

    return <div>{props.numbers} sum is {props.numbersSum} which is {primeMessage}</div>
}
