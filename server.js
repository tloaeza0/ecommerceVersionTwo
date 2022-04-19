const express = require('express');
const cors = require('cors');
const mysql= require('mysql');
// const mysql2 = require('mysql2');
require('dotenv').config();

const app = express ();



const db = mysql.createPool({
    // host:'us-cdbr-east-05.cleardb.net',
    // user:'b5dd6a4fcc3fed',
    // database:'heroku_93ca4a636c86d9e',
    // password:'heroku_93ca4a636c86d9e'
    host:'localhost',
    user: 'root',
    database: 'ecommerce',
    password:'Bellastank154'
});

db.getConnection(err =>{
    if(err) {
        return err;
    }else{
        console.log('db connection successful');
    }
});

app.use(express.json());
app.use(cors());

// app.get('/home', (req,res) =>{
//     res.json({message:'Testing'})
// });

app.get('/plants',(req,res)=>{
    db.query('SELECT * FROM plants', (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});
 
app.get('/rareplants',(req, res)=>{
    db.query ('SELECT * FROM rare', (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
const port = process.env.port;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});