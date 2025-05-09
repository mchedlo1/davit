

export class DepartureTrains{
    date?: string
    destination?: string
    id!: number
    source?: string
    trains?: Trains
}

export class Trains {
    arrive?: string
    date?: string
    departure?: string
    departureId!: number
    from?: string
    id!: number  
    name?: string
    number?: number
    to?: string
    vagons?: Vagons[]
}

class Vagons{
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