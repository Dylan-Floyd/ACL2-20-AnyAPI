const Routes = require('express');
const Animal = require('../models/Animal.js');

module.exports = Routes()
  .get('/animals', async (req, res) => {
    const animals = await Animal.getAll();
    res.json(animals);
  })
  .get('/animals/:id', async (req, res, next) => {
    
  })
  .post('/animals', async (req, res, next) => {

  })
  .put('/animals', async (req, res, next) => {

  })
  .delete('/animals', async (req, res, next) => {

  });  
