const offset = 0;
const limit = 10;

const url = ` https://pokeapi.co/api/v2/pokemon?offset=${offset}limit=${limit}`;


function covertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
            <span class="number">#001</span>
            <pan class="name">${pokemon.name}</span>
                <div class="delits">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">paison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div> 
        </li>        


    `
}
const pokemonList = document.getElementById('pokemonList');


fetch(url)
.then( (response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemons) =>{
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons [i];
        pokemonList.innerHTML += covertPokemonToLi(pokemon)
   
        
    }
})
.catch((error) => console.log(error))
