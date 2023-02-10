let container = document.querySelector('.pokemons')
let nevegacion = document.querySelector('.numeros')

const URL = 'https://rickandmortyapi.com/api/character'
let nextLink = ''
let prevLink = ''

const next = () => {
  getPokemons(nextLink)
}

const prev = () => {
  getPokemons(prevLink)
}
const getPokemons = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const { results, info } = data
  
    nextLink = info.next
    prevLink = info.previous
    console.log(results)
    showPokemons(results)
    // return { results }
}



const showPokemons = async (array) => {
  limpiarContenedor()

    array.map(item => {
  
      renderCard(item)
      
    })
}

const renderCard = (pokemon) => {
    const card = document.querySelector('.pokemons')
    const { name, id, image, species, gender, origin} = pokemon
    // console.log(name, id)
    // console.log(sprites.other.dream_world.front_default)
    let cardPokemon = `
      <div class="col ">
      <div class="card h-100 ">
        <img src="${image}" class="me-auto ms-auto" alt="" width="150">
       
        <div class="card-body mt-5 border">
          <h5 class="card-title text-capitalize">${name}</h5>
          
          <p class="card-text text-capitalize">Genero: ${gender}</p>
          <p class="card-text text-capitalize">Especie: ${species}</p
        </div>
        <div class="card-footer">
          <small class="text-muted">Origen: ${origin.name}</small>
        </div>
      </div>
    </div>
    `
    card.innerHTML += cardPokemon
}
const limpiarContenedor = () => {

  container.innerHTML = ''
}

getPokemons(URL)
