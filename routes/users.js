const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/crud")
.then(function(){
    console.log("connected");
})

var userSchema = mongoose.Schema({
    name : String,
    username :String
})

module.exports=mongoose.model("user",userSchema)