const mongoose = require('mongoose')

mongoose.connect("conncetion string/Name_Of_Database")
.then(()=>{
    console.log("mongodb coonected")
})
.catch(()=>{
    console.log("failed to connect")
})

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const collection=new mongoose.model("collection1",loginSchema)
module.exports=collection
