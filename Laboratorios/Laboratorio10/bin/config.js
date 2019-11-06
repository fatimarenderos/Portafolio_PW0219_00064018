const Mongoose = require ("mongoose");
let database = "RegisterDB";
let host = 'localhost';
let port='27017';
let url = `mongodb://${host}:${port}/${database}`

const connect= ()=>{
    Mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("Conexion a la BD exitosa");
    })
    .catch(()=>{
        console.log("Un error ha ocurrido al quererse conectar con la BD")
    });
    
};

module.exports = {
    connect
}