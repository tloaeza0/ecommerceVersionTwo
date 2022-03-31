const express = require('express');
const cors = require('cors');
const mysql= require('mysql');
require('dotenv').config();

const app = express ();



const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
});

db.connect(err =>{
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