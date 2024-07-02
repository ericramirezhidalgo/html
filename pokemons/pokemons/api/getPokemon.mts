const API_URL = "https://pokeapi.co/api/v2/pokemon/"
import type { listPokemon } from "../interface/interface";


export default function fetchPokemon(): void {
    const URL: string = "https://pokeapi.co/api/v2/pokemon/",
        $pokeBox: HTMLElement = document.getElementById("poke-box") as HTMLElement,
        fragment: Node = document.createDocumentFragment()
    fetch(URL)
        .then(res => res.json())
        .then((res: listPokemon) => {
            console.log(res.results.forEach((pokemon) => {
                console.log(pokemon)
            }))
        })
}




