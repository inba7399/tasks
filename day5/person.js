class person{
    constructor(a,b,c,d)
    {
        this.a=a
        this.b=b
        this.c=c
        this.d=d
    }
    displayInfo(){
      console.log(`firstName: ${this.a}`)
      console.log(`secondName: ${this.b}`)
      console.log(`age: ${this.c}`)
      console.log(`skills: ${this.d}`)
}
}
let person1=new person ("inba","sagar",25,["html","css","java script"])
person1.displayInfo()
