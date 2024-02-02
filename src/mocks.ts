import Item from "./entity/Item";

export const ITEM: Item = {
    name: 'teste',
    sn: '12378123812',
    image_url: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_100/site-ton/maquininhas/new-t1-1',
    value: 42.42
}

export const ITEM_LIST: Item[] = [
    {
        name: 'T1',
        sn: '12378123812',
        image_url: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_100/site-ton/maquininhas/new-t1-1',
        value: 42.42
    },
    {
        name: 'T2',
        sn: '218371827389',
        image_url: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t1-chip-1',
        value: 60.00
    },
    {
        name: 'T3',
        sn: '178293718978',
        image_url: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t3-1',
        value: 80.00
    }
]