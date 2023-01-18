console.log('Hola Saida')

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan'
}

// const {age, name, codeName, power} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

// const createHero = (person) => {

//     const {age, name, codeName, power} = person

//     return {
//         id: 332435435,
//         name: name,
//         age: age,
//         codeName: codeName,
//         power: power
//     }
// }

// const createHero = ({age, name, codeName, power}) => {

//     return {
//         id: 332435435,
//         name,
//         age,
//         codeName,
//         power
//     }
// }

const createHero = ({age, name, codeName, power}) => ({id: 332435435, name, age, codeName, power})

console.log(createHero(person))

