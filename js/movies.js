let container = document.querySelector('.pokemons')
let nevegacion = document.querySelector('.numeros')
const API_KEY = '7a0e21490421cfb541342f4f4d3ac864'
const URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + API_KEY
const pathImage = 'https://image.tmdb.org/t/p/w300'

let numeroPagina = 1

const next = () => {
  getPokemons(URL + '&page=' + (numeroPagina + 1))
}

const prev = () => {
  getPokemons(URL + '&page=' + (numeroPagina - 1))
}
const getPokemons = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const { results, page } = data
    
    numeroPagina = page
  
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
    const { title, overview, poster_path, popularity, original_title } = pokemon
    // console.log(name, id)
    // console.log(sprites.other.dream_world.front_default)
    let cardPokemon = `
      <div class="col ">
      <div class="card h-100 ">
        <img src="${pathImage}${poster_path}" class="me-auto ms-auto" alt="" width="150">
       
        <div class="card-body mt-5 border">
          <h5 class="card-title text-capitalize">${original_title}</h5>
          <label class="badge badge-primary">Tipo</label>
          <p class="card-text text-capitalize">${overview}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Popularidad: ${popularity}</small>
        </div>
      </div>
    </div>
    `
    card.innerHTML += cardPokemon
}
const limpiarContenedor = () => {

  container.innerHTML = ''
}

getPokemons(`${URL}`)
