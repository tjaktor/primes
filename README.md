#With primes you can check if a number is a prime number or not.

##Install (in primes/client and primes/server)
npm install

##To run (in primes directory):

docker-compose build

docker-compose up


Browse to http://localhost:3000 for UI.



##Backend entrypoints:

http://localhost:5000/myapi/sum?nums=1,2,3
E.g. check if sum of 1,2,3 is prime number

returns:
{
  "result": 6,
  "isPrime": false
}

in case of an error e.g.:
{
  "errors": [
    {
      "value": "1,2,-3",
      "msg": "only positive integer numbers are allowed",
      "param": "nums",
      "location": "query"
    }
  ]
}


http://localhost:5000/myapi/checkprime?number=2

returns:
{
  "isPrime": true
}

in case of an error e.g.:
{
  "errors": [
    {
      "value": "-2",
      "msg": "only positive numbers allowed",
      "param": "number",
      "location": "query"
    }
  ]
}


##Run tests in /server:
npm run test
