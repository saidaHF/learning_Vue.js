console.log('Hola Saida')

const characters = ['Goku', 'Vegeta', 'Trunks']

const [g, v, t] = characters

console.log(g, v, t)

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(letters, numbers)

