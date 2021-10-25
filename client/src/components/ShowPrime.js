import React from "react";

export const ShowPrime = (props) => {
    return <div>{props.number} is {choosePrimeMessage(props.isPrime)}</div>
}

export const ShowSumPrime = (props) => {
    return <div>{props.numbers} sum is {props.numbersSum} which is {choosePrimeMessage(props.isPrime)}</div>
}

const choosePrimeMessage = (isPrime) => {
    return isPrime ? "PRIME!" : "NOT PRIME!";
}
