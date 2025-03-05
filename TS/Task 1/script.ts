/* ------------------------------ TASK 1 -----------------------------------
Priskirkite tipus VISIEMS pateiktiems kintamiesiems, kad kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.
-------------------------------------------------------------------------- */

let one: number = 654;
let two: boolean = true;
let three: boolean = true;

type booleanOrString = boolean | string
let four: booleanOrString = true;
four = '123';

type numberArray = number[]
let five: numberArray = [1,2,3];
five = [21,22,23,24];
// five = ['a', 'b']; // error
// five = [true, true, false]; // error

type numberOrString = number[] | string[]
let six: numberOrString = [1,2,3,4];
six = ['a','b','c','d'];
// six = ['a',2,3,'d']; // error
// six = [true, false]; // error

type mixedOrNumOrStringArray = number[] | string[] | (string | number)[]
let seven: mixedOrNumOrStringArray = [1,2,3,4];
seven = ['a','b','c','d'];
seven = ['a',2,3,'d'];
// seven = [true, false]; // error

type numberAndStringArray = [string, number]
let eight: numberAndStringArray = ['hi', 1];
eight = ['bye', 2];
// eight = [1,2]; // error
// eight = ['a','b','c']; // error

//I'm feeling rather unwell so i will probably not get too much done this time, sorry!