const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export type PokemonInfo = {
    id?: number;
    name?: string;
    base_experience?: number;
    height?: number;
    is_default?: boolean;
    order?: number;
    weight?: number;
    abilities?: Ability[];
    forms?: Species[];
    game_indices?: GameIndex[];
    held_items?: HeldItem[];
    location_area_encounters?: string;
    moves?: Move[];
    species?: Species;
    sprites?: Sprites;
    cries?: Cries;
    stats?: Stat[];
    types?: Type[];
    past_types?: PastType[];
}

export type Ability = {
    is_hidden?: boolean;
    slot?: number;
    ability?: Species;
}

export type Species = {
    name?: string;
    url?: string;
}

export type Cries = {
    latest?: string;
    legacy?: string;
}

export type GameIndex = {
    game_index?: number;
    version?: Species;
}

export type HeldItem = {
    item?: Species;
    version_details?: VersionDetail[];
}

export type VersionDetail = {
    rarity?: number;
    version?: Species;
}

export type Move = {
    move?: Species;
    version_group_details?: VersionGroupDetail[];
}

export type VersionGroupDetail = {
    level_learned_at?: number;
    version_group?: Species;
    move_learn_method?: Species;
}

export type PastType = {
    generation?: Species;
    types?: Type[];
}

export type Type = {
    slot?: number;
    type?: Species;
}

export type GenerationV = {
    "black-white"?: Sprites;
}

export type GenerationIv = {
    "diamond-pearl"?: Sprites;
    "heartgold-soulsilver"?: Sprites;
    platinum?: Sprites;
}

export type Versions = {
    "generation-i"?: GenerationI;
    "generation-ii"?: GenerationIi;
    "generation-iii"?: GenerationIii;
    "generation-iv"?: GenerationIv;
    "generation-v"?: GenerationV;
    "generation-vi"?: { [key: string]: Home };
    "generation-vii"?: GenerationVii;
    "generation-viii"?: GenerationViii;
}

export type Other = {
    dream_world?: DreamWorld;
    home?: Home;
    "official-artwork"?: OfficialArtwork;
    showdown?: Sprites;
}

export type Sprites = {
    back_default?: string;
    back_female?: null;
    back_shiny?: string;
    back_shiny_female?: null;
    front_default?: string;
    front_female?: null;
    front_shiny?: string;
    front_shiny_female?: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
}

export type GenerationI = {
    "red-blue"?: RedBlue;
    yellow?: RedBlue;
}

export type RedBlue = {
    back_default?: string;
    back_gray?: string;
    front_default?: string;
    front_gray?: string;
}

export type GenerationIi = {
    crystal?: Crystal;
    gold?: Crystal;
    silver?: Crystal;
}

export type Crystal = {
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
}

export type GenerationIii = {
    emerald?: OfficialArtwork;
    "firered-leafgreen"?: Crystal;
    "ruby-sapphire"?: Crystal;
}

export type OfficialArtwork = {
    front_default?: string;
    front_shiny?: string;
}

export type Home = {
    front_default?: string;
    front_female?: null;
    front_shiny?: string;
    front_shiny_female?: null;
}

export type GenerationVii = {
    icons?: DreamWorld;
    "ultra-sun-ultra-moon"?: Home;
}

export type DreamWorld = {
    front_default?: string;
    front_female?: null;
}

export type GenerationViii = {
    icons?: DreamWorld;
}

export type Stat = {
    base_stat?: number;
    effort?: number;
    stat?: Species;
}

const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error("Request failed")
}



const data = await response.json() as PokemonInfo

data.types?.map(repo => {
    return {
        type: repo.type?.name
    }
})

export async function getAllPokemonData(limit: number, offset: number): Promise<PokemonInfo[]> {
    const allPokemonData: PokemonInfo[] = [];
    const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
        throw new Error("Request failed");
    }
    const data = await response.json();
    for (let pokemon of data.results) {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
            throw new Error("Request failed");
        }
        const pokemonData = await pokemonResponse.json() as PokemonInfo;
        allPokemonData.push(pokemonData);
    }
    return allPokemonData;
}



