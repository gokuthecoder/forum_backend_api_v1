const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Dark_Forum').then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("Eror in Dattaase", err);
})