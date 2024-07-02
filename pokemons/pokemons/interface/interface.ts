export interface listPokemon {
    count: number,
    next: string | null,
    previous: string | null
    results: {
        name: string,
        url: string
    }[]
}
export interface pokemon {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        back_default: string,
    },
    abilities: {
        ability: {
            name: string
        }
    }[],
    types: {
        type: {
            name: string
        }
    }[],
    stats: {
        base_stat: number,
        stat: {
            name: string
        }
    }[]
}
