const URL = 'https://pokeapi.co/api/v2/pokemon?limit=999&offset=0';

const URL_IMAGE = 'https://serebii.net/pokemon/art/'; //complementar rota (numero.png)

async function getData(callback) {
  const response = await fetch(URL);
  const data = await response.json();
  callback(data);
}

export function formatData(callback) {
  getData(({ results }) => {
    const pokemonList = results.map((pokemon, index) => {
        const number = String(index + 1).padStart(3, '0')
        return {
            name: pokemon.name,
            number,
            image: `${URL_IMAGE}${number}.png`,
        }
    })
    return callback(pokemonList);
  })
}