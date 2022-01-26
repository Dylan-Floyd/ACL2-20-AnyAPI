const Animal = require('../models/Animal.js');

module.exports = async (id) => {
  const existingAnimal = await Animal.getById(id);
  if (!existingAnimal) {
    const error = new Error(`Animal ${id} not found`);
    error.status = 404;
    throw error;
  }
};
