class circle{
    constructor(radius,colour)
    {
this.radius=radius
this.colour=colour
    }
aria(){
 const aria= 3.14*this.radius*this.radius
 console.log(`aria:${aria}`)
 console.log(`colour:${this.colour}`)
}
circumference()
{
   const a=2*3.14*this.radius 
   console.log(`circumference:${a}`)
}
}
const c1=new circle(7,"red")
c1.aria()
c1.circumference()