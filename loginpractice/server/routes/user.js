const express = require('express');
const Router = express.Router();
const User = require('../models/User');
Router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            console.log('Error occured :' +err);
        } else{
            console.log(users);
            res.json(users);
        }
    })
})

Router.post('/register',async (req,res)=>{
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    user.save()
    .then(()=>res.json('user Added'))
    .catch(err => res.status(400).json('Error :'+err));
    
})
Router.post('/login',async (req,res)=>{
    const user = await User.findOne({username:req.body.username});
    if(!user){
        res.status(400).send('user not found');
        return ;
    } else{
        if(req.body.password == user.password){
            res.status(200).send(user);
        } else{
            res.status(400).send('wrong password');
        }
    }
})
module.exports = Router;