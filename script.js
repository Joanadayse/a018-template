const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

function pokefuncao (pokemons){
  const pokemon100={...pokemons,vida:100}
  return pokemon100
  }
console.log(pokefuncao(pokemons[1]))
//vai mudar o vida do indice 1 para 100 

const pokemonVidaCheia =pokemons.map(pokefuncao)
console.log(pokemonVidaCheia);
//todos com vida:100

const pokemonDeFogo=pokemons.filter((item)=>{return item.tipo==="fogo"})
console.log(pokemonDeFogo)
//mostrou os dois itens com o tipo:fogo


