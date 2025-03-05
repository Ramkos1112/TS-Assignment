/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

class Potion{
  color: [number, number, number];
  volume: number

  constructor(color: [number, number, number], volume: number) {
    this.color = color,
    this.volume = volume
  }

  mix(secondPotion: Potion): Potion {
    const finalVolume = this.volume + secondPotion.volume
    const finalColor: [number, number, number] = [
      ((this.color[0] * this.volume) + (secondPotion.color[0] * secondPotion.volume)) / finalVolume, 
      ((this.color[1] * this.volume) + (secondPotion.color[1] * secondPotion.volume)) / finalVolume, 
      ((this.color[2] * this.volume) + (secondPotion.color[2] * secondPotion.volume)) / finalVolume,
    ].map(Math.ceil) as [number, number, number] //using math ceil instead of math round because rounding to closest number rounds down, which in this case doesnt work because we're working with quantities that shouldn't be rounded down due to not being able to get rid of the excess.
    return new Potion(finalColor, finalVolume)
  }
}

const felix_felicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const newPotion = felix_felicis.mix(polyjuice);

console.log(newPotion);