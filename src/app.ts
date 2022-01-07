// Importáld be a HumanHero és TransformerHero osztályokat.
 import { HumanHero } from "./hero";
 import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [{
  id: 1,
  name: 'David',
  sex: 'male',
  age: 20,
  health: 98
},{
  id: 2,
  name: 'Betty',
  sex: 'female',
  age: 25,
  health: 66
},{
  id: 3,
  name: 'Rosalinde',
  sex: 'female',
  age: 50,
  health: 80
},];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  {
    id: 1,
    name: 'Tulip',
    wings: 0,
    wheels: 20,
    clan: 'Turks'
  },
  {
    id: 2,
    name: 'Barracuda',
    wings: 3,
    wheels: 1,
    clan: 'Mongols'
  },
  {
    id: 3,
    name: 'Wolf',
    wings: 2,
    wheels: 30,
    clan: 'Tatars'
  }
];
