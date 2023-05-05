const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')

app.use(express())
app.use(cors())
app.use(express.static('public'))

const cats = {
    'persian': {
        'breed': 'Persian',
        'lifespan': '14 years - 15 years',
        'img': './cat-img/persian-cat.jpg'
    },
    'siamese': {
        'breed': 'Siamese',
        'lifespan': '12 years - 15 years',
        'img': './cat-img/siamese.jpg'
    },
    'norwegian forest': {
        'breed': 'Norwegian Forest',
        'lifespan': '12 years - 16 years',
        'img': './cat-img/norwegian-forest-cat.jpg'
    },
    'russian blue': {
        'breed': 'Russian Blue',
        'lifespan': '10 years - 16 years',
        'img': './cat-img/russian-blue.jpg'
    },
    'birman': {
        'breed': 'Birman',
        'lifespan': '14 years - 15 years',
        'img': './cat-img/birman.jpg'
    },
    'not found': {
        'breed': 'unknown',
        'lifespan': 'unknown',
        'img': './cat-img/unknown-photo.jpg'
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/public/index.html')
})

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/public/main.js')
})

app.get('/api', (request,response) => {
    response.json(cats)
})
app.get('/api/:cat', (request,response) => {
    const catProfile = request.params.cat.toLowerCase()
    // console.log(cats[catProfile])
    if(cats[catProfile]){
        response.json(cats[catProfile])
    } else {
        response.json(cats['not found'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})