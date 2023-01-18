import {getHeroById} from './bases/08-imp-exp'

// console.log('Inicio')
// new Promise((resolve, reject) => {
//     console.log('cuerpo de la promesa')
//     reject('Promesa resuelta con error')
// })
// // .then(msh => console.log('TODO OK'))
// // .catch(err => console.log(err))
// //  Es lo mismo que:
// .then(console.log)
// .catch(console.log)
// console.log('Fin')


const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)

            if (hero) {
                resolve(hero)
            } else {
                reject('Heroe no existe')
            }
        }, 1000);
    });
}

getHeroByIdAsync(2)
    .then(h => {
        console.log(`El heroe es: ${h.name}`)
    })
    .catch(console.log)