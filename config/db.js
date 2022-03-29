// require('dotenv').config();
// const app = express()
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     database:process.env.DB_NAME,
//     password:process.env.DB_PASSWORD
// })

// let sql = "SELECT * FROM products;";

// pool.execute(sql, function (err,result){
//     if(err) throw err;
//     console.log(result);
// })
// app.get('/products',(req,res)=>{
//     pool.query('SELECT * FROM products', (err, result)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.send(result);
//         }
//     })
// })
// module.exports = pool.promise();