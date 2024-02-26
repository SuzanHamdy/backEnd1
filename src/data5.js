
const fs = require("fs")
const addPerson = (id , fname , lname , age , city)=>{
const allData =loadData()
const filterData = allData.filter((obj) => {
return obj.id ===id
})
if (filterData.length === 0) {
     
allData.push({
    id : id,
    fname :fname ,
    lname : lname ,
    age :age ,
    city : city
})
SaveData(allData)
}else {
    console.log( "ERROR FILTERDATA NOT RETURN ID")
}}
///////////////////////////////////////////////////////////
// DELETE
const deleteData = (id) =>{
    const allData = loadData()
    const keepData = allData.filter((obj) => {
    return obj.id !==id
    }) 
    SaveData(keepData)
    console.log( "YOU HAVE ALREADY DELETED AN ITEM")
}
///////////////////////////////////////////
// READ
const readData =(id) =>{
  const allData = loadData()
  const readItem = allData.find((obj) => {
  return obj.id ===id
  }) 
  // console.log(readItem)
  // console.log( "YOU HAVE ALREADY READED AN ITEM")
  if (readItem) {
    console.log(readData.fname)
  } else {
    console.log("ID NOT FOUND")
  }
}

const listData =() => {
  const allData = loadData()
  allData.forEach((obj) => {
    console.log(obj.fname , obj.age , obj.city)
  });
}


///////////////////////////////////////////////////
const loadData =()=>{
  try{
    const DataJson =fs.readFileSync("data10.json").toString()
    return JSON.parse(DataJson)
  }
  catch{
    return []
  }
}
////////////////////////////////////////
 const SaveData =(allData)=>{
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , allDataJson)
 }
 /////////////////////////////////////////


module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
    

    }




