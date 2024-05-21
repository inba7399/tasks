class uberprice{
    constructor(start,end,kilometer){
        this.start=start
        this.end=end
        this.kilometer=kilometer
    }
displayPrice(){
    const price=120*this.kilometer

    console.log(`strat: ${this.start}`)
    console.log(`end: ${this.end}`)
    console.log(`price: ${price}`)
}
}

const trip1= new uberprice("trichy","kodaikanal",120)
const trip2= new uberprice("chennai","koadikanal",400)

trip2.displayPrice()