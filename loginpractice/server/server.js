const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const db = mongoose.connection;
const userRouter = require('./routes/user');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/user',userRouter);
mongoose.connect('mongodb://localhost/nodekb',{useNewUrlParser: true,useUnifiedTopology: true},()=>console.log('connected to db'));
db.on('error',(err)=> console.log(err));
db.once('open',()=>console.log('db working fine'));
app.get('/',(req,res)=>{
    res.send('yeahh working');
})


app.listen(5000,()=>console.log('connected to 5000 port'));