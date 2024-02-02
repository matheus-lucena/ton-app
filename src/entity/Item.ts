interface Item{
    image_url: string
    name: string
    sn: string
    value: number
}


export interface ItemState extends Item{
    count?: number
}

export default Item