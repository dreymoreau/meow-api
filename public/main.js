document.querySelector('#cat-output').addEventListener('click', catPiRequest)

async function catPiRequest(){
    const catName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:3001/api/${catName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.breed
        document.querySelector('p').innerText = data.lifespan
        document.querySelector('img').src = data.img
        document.querySelector('img').alt = 'photo of cat'
    }catch(error){
        console.log(error)
    }
}