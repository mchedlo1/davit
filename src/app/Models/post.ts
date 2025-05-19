
export class Post {
    trainId!: number
    date!: string
    email!: string
    phoneNumber!: string
    people !: People[]
}

class People {
    seatId!: string
    name!: string
    surame!: string
    idNumber!: string
    status!: string
    payoutCompleted!: boolean
}