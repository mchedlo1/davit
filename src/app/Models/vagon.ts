

export class Vagons{
    id!: number
    name?: string
    seats?: Seats[]
    trainId?: number
    trainNumber?: number
}

class Seats{
    isOccupied?: boolean 
    number?: string
    price?: number
    seatId?: string
    vagonId!: number
}