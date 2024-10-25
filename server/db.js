const pool=require('pg').Pool;
const db=new pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"19782412",
    port:5432
})

console.log(db)
module.exports= db;