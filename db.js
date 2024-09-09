const mongoose = require('mongoose');

const DB_Connect = mongoose.connect("mongodb+srv://arthteerth93:WaveCreativeEcho@cluster0.i22535d.mongodb.net")
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((e)=>{
        console.log("error in connecting the DB",e)
    })

module.exports = {
    DB_Connect
}