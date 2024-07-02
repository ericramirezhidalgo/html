export async function getPokemonDescription(id: number): Promise<string> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    if (!response.ok) {
        throw new Error("Request failed");
    }
    const data = await response.json();
    const flavorTextEntries = data.flavor_text_entries;
    const englishFlavorText = flavorTextEntries.find((entry: any) => entry.language.name === 'en');
    return englishFlavorText ? englishFlavorText.flavor_text : '';
}
