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