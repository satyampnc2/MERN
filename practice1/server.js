const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = mongoose.connection;
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/nodekb');

db.once('open',()=>console.log('database connected..'));
db.on('error',(err)=>console.log(err));

const User = require('./models/users');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            console.log(err);
        } else{
            res.json(users);
        }
    })
})

//Adding a user
app.post('/add/user',(req,res)=>{
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save((err)=>{
        if(err){
            console.log(err);
        } else{
            res.json(user);
            console.log(user);
        }
    })
})

app.listen(5000,()=>console.log('conneted...'))