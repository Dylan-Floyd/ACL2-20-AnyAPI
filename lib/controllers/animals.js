const Routes = require('express');
const Animal = require('../models/Animal.js');
const validateAnimal = require('../utils/validateAnimal.js');
const verifyAnimalExists = require('../utils/verifyAnimalExists.js');

module.exports = Routes()
  .get('/animals', async (req, res) => {
    const animals = await Animal.getAll();
    res.json(animals);
  })
  .get('/animals/:id', async (req, res) => {
    const { id } = req.params;
    const animal = await Animal.getById(id);
    res.json(animal);
  })
  .post('/animals', async (req, res, next) => {
    try {
      const animal = req.body;
      validateAnimal(animal);
      const result = await Animal.insert(animal);
      res.json(result);
    } catch (error) {
      next(error);
    }
  })
  .put('/animals/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      await verifyAnimalExists(id);
      const animal = req.body;
      validateAnimal(animal);
      const result = await Animal.updateById(id, animal);
      res.json(result);
    } catch (error) {
      next(error);
    }
  })
  .delete('/animals/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      await verifyAnimalExists(id);
      const result = await Animal.deleteById(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });  
