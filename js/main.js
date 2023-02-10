let container = document.querySelector('.pokemons')
let nevegacion = document.querySelector('.numeros')

const URL = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemons = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const { results, next, previous } = data
    // console.log(results)
    return { results }
}

const showPokemons = async () => {
    const {results} = await getPokemons(`${URL}?offset=0&limit=20`)
    results.map(item => {
      
      fetch(item.url)
      .then(response => response.json())  
      .then(data => {
        renderCard(data)
      })
      .catch(error => console.log(error))
    })
}

const renderCard = (pokemon) => {
    const card = document.querySelector('.pokemons')
    const { name, id, sprites, types } = pokemon
    // console.log(name, id)
    // console.log(sprites.other.dream_world.front_default)
    let cardPokemon = `
      <div class="col ">
      <div class="card h-100 ">
        <img src="${sprites.other.dream_world.front_default}" class="me-auto ms-auto" alt="" width="150">
       
        <div class="card-body mt-5 border">
          <h5 class="card-title text-capitalize">${name}</h5>
          <label class="badge badge-primary">Tipo</label>
          <p class="card-text text-capitalize">Tipo: ${types[0].type.name}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">#${id}</small>
        </div>
      </div>
    </div>
    `
    card.innerHTML += cardPokemon
}

showPokemons()