const express = require('express')
const index = require('express').Router();
const path = require('path');

index.use(express.static('../public'));

index.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

index.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

module.exports = index;
