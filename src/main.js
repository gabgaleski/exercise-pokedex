//I
import { createList } from "./create-list";
import { formatData } from "./pokemon-service";
import './style.css'
const list = document.querySelector('.list');
const input = document.getElementById('poke-filter');
const pokeballImg = document.querySelector('.pokeball-img');

let filterTerm = '';
input.addEventListener('keyup', () => {
    filterTerm = input.value;
    setList();
})

function filterList(pokemonList) {
  return pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm.toLowerCase())
  })
};

window.addEventListener('scroll', () => {
  const rotation = `translateY(-50%) rotate(${window.scrollY / 30}deg)`;
  pokeballImg.style.transform = rotation;
})

function setList() {
  formatData((pokemonList) => {
    const listFilter = filterList(pokemonList)
    const template = createList(listFilter);
    list.innerHTML = template;
  })
};

setList();