function sayHi() {
    console.log("HI")
    console.log(this)
}


// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         console.log(`${this.first} ${this.last} AKA ${this.nickName}`)
//     }
// }

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const {first, last, nickName} = this
        return(`${first} ${last} AKA ${nickName}`)
    },
  printBio() {
    const fullName = this.fullName()
    console.log(`${fullName} is a person!`)
  }, 
  laugh: () => {
    console.log(this)
    console.log(`${this.nickName} says HAHAHAHAHA`)
  }
}

person.fullName()

person.nickName = "CHEEEEEERRRRR"

console.log(person)
person.printBio() //shows as Cherilyn Sarkisian AKA CHEEEEEERRRRR is a person!

person.laugh() //shows as: undefined says HAHAHAHAHA


///////ANNOYOMATIC DEMO

const annoyer = {
phrases:['literally','cray cray','I can\'t even','Totes!','YOLO','Can\'t Stop, Won\'t Stop'],
  pickPhrase(){
    const {phrases} = this
    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start(){
    // setInterval(() {
    //   console.log(this.pickPhrase())
    // }, 3000) /// won't work after first print out due to invocation of this method changing

    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop(){
    clearInterval(this.timerId)
    console.log("PHEW THANK HEAVNS THAT IS OVER")
  }
}


annoyer.start()
