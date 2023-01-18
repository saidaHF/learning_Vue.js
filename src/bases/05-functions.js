console.log('Hola Saida')

const saludar = (nombre='Peter') => `Hola ${nombre}`

const nombre = 'Tony'

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Tony001'
//     }
// }

const getUser = () => ({uid:'ABC123', username:'Tony001'})

// console.log(getUser())

const heroes = [{
    id:1,
    name: 'Batman'
}, {
    id:2,
    name:'Superman'
}]

const existe = heroes.some((heroe) => heroe.id === 1);

console.log(existe)



