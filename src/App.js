

const fs = require("fs")
const data5 = require("./data5.js")
const yargs = require("yargs")
/////////////////////////////////////////
yargs.command({
command:"add",
describe:"to add an item",
builder :{
id :{
  describe :"this is id desc in add command",
  demandOption : true,
  type :"string"
},
fname :{
    describe :"this is the first name desc in add command",
    demandOption : true,
    type :"string"
  },
  lname :{
    describe :"this is the last name desc in add command",
    demandOption : true,
    type :"string"
  }
},
handler :(d)=>{
  data5.addPerson(d.id , d.fname , d.lname , d.age , d.city)
}
})
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler :(d)=>{
      data5.deleteData(d.id)
    }
    })

yargs.command({
command:"read",
describe:"to read data",
builder :{
id :{
  describe :"this is id desc in read command",
  demandOption : true,
  type :"string"
}

},
handler :(d)=>{
  data5.readData(d.id)
}
})
yargs.command({
  command:"list",
  describe:"to rlist data",
  
  handler :()=>{
    data5.listData()
  }
  })













/////////////////////////////////////////

yargs.parse()