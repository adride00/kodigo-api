let container = document.querySelector('.pokemons')
let nevegacion = document.querySelector('.numeros')

const URL = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1d774704b2cff02a10026b1a2d80d74f&hash=8db93fe515e0f29491fa839cc4bcc688&limit=20'

let offset = 0
const next = () => {
  getPokemons(`${URL}&offset=${offset + 20}`)
}

const prev = () => {
  getPokemons(`${URL}&offset=${offset - 20}`)
}
const getPokemons = async (url) => {
    const response = await fetch(url)
    const datos = await response.json()
    const { results, data } = datos
    offset = data.offset
    
    console.log(data)
    showPokemons(data.results)
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
    const { name, description, thumbnail, comics} = pokemon
    // console.log(name, id)
    // console.log(sprites.other.dream_world.front_default)
    let cardPokemon = `
      <div class="col ">
      <div class="card h-100 ">
        <img src="${thumbnail.path}.${thumbnail.extension}" class="me-auto ms-auto" alt="" width="150">
       
        <div class="card-body mt-5 border">
          <h5 class="card-title text-capitalize">${name}</h5>
          <label class="badge badge-primary">Tipo</label>
          <p class="card-text text-capitalize"> ${description || "NO INFO"}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted"># Comics: ${comics.available}</small>
        </div>
      </div>
    </div>
    `
    card.innerHTML += cardPokemon
}
const limpiarContenedor = () => {

  container.innerHTML = ''
}

getPokemons("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1d774704b2cff02a10026b1a2d80d74f&hash=8db93fe515e0f29491fa839cc4bcc688")
