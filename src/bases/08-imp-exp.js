// import {owners} from './data/heroes.js'

// console.log(owners)

import superHeroes from '../data/heroes'

// console.log(superHeroes)

// getHeroById(id) 
// funcion lambda, find
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id);
// console.log(getHeroById(2)) // Spiderman

// getHeroesByOwner() 'DC', 'Marvel'

export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner);
// console.log(getHeroByOwner('Marvel')) // []



// En index:
// import { getHeroById, getHeroByOwner} from './bases/08-imp-exp'

// console.log(getHeroById(2)) // Spiderman

// console.log(getHeroByOwner('Marvel')) // []