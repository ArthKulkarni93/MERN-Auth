const mongoose = require('mongoose');

const DB_Connect = mongoose.connect(your url here)
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((e)=>{
        console.log("error in connecting the DB",e)
    })

module.exports = {
    DB_Connect
}
