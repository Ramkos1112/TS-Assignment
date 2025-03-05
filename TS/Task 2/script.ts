/* ------------------------------ TASK 2 -----------------------------------
Aprašykite type'us, kad kintamieji, kuriems jie priskirti būtų teisingai aprašyti ir visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.-------------------------------------------------------------------------- */
type One = {
  vardas: string,
  pavarde: string,
  amzius: number
}
let oneObj: One = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
type Two = {
  vardas: string,
  pavarde: string,
  amzius: number,
  ugis?: number,
  svoris?: number
}
let twoObj: Two = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
twoObj = {
  vardas: '',
  pavarde: '',
  amzius: 0,
  ugis: 0,
  svoris: 0
};
type Three = {
  vardas: string,
  pavarde: string,
  lytis? : "vyras" | "moteris"
  //Lytis is optional because i had to comment out the error line, which then makes it miss the gender part of the object.
}
let threeObj: Three = {
  vardas: '',
  pavarde: '',
  lytis: 'vyras'
};
threeObj = {
  vardas: '',
  pavarde: '',
  lytis: 'moteris'
};
threeObj = {
  vardas: '',
  pavarde: '',
  // lytis: 'sraigtasparnis' // error
};