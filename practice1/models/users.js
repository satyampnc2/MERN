const { request } = require("express");

const express = require('express');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    age:{
        type: Number,
        required:true
    }
});

const User = module.exports = mongoose.model('User',userSchema);