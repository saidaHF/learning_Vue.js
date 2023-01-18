console.log('Hola Saida')

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 377899,
        lat: 12.8768,
        lng: 34.39494
    }
}

const persona2 = {...persona};

persona2.nombre = 'Peter'


console.log(persona)
console.log(persona2)











