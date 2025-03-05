/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

function textToNumbers(input: string):number{
  let numResult = "";

  for(let i = 0; i < input.length; i++){
    if (i % 2 === 0) {
      numResult += '1';
    } else {
      numResult += '0';
    }
  }
  return parseInt(numResult, 2)
}

console.log(textToNumbers("kebabas"))

