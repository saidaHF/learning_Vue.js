const apiKey = 'X1sdWT9v5gwSY9zukkSlydACx9Ug5jCI'
// https://api.giphy.com/v1/gifs/random?api_key=X1sdWT9v5gwSY9zukkSlydACx9Ug5jCI

console.log('HOLA SAIDA')

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    