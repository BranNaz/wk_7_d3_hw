console.log('Pokemon HW')
const form2 = document.getElementById('poke_dex')

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const pokemonName = event.path[0][0].value
    loadData(pokemonName)
})

const getPokemon = async (pokemonName) => {
    console.log('getting Pokemon')
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const data = await res.json()
    return data
};


const loadData = async (pokemonName) => {
    console.log('loading data')
    if (document.querySelector('section').innerHTML != ''){
        clearBtn.click()
    }
    const data = await getPokemon(pokemonName)
    const poke = [data]
    poke.map(addPoke)
}

const addPoke = async (poke) => {
    console.log('adding pokemon')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${poke.sprites.front_default}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${poke.name}</h5>
        <ul>
            <li>Ability ${poke.abilities[0].ability.name}</li>
            <li>Base HP ${poke.stats[0].base_stat}</li>
            <li>Base Experience ${poke.base_experience}</li>
        </ul>
    </div>
  </div>
    `
    document.body.append(div)
}
const clearBtn = document.getElementById('clear')
const clearPokemon = () => {
    console.log('cleared pokemon')
    document.querySelector('section').innerHTML =''
};
clearBtn.addEventListener('click', clearPokemon)