const pool = require('../utils/pool.js');

module.exports = class Animal {
  id;
  animal_name;
  kingdom;
  phylum;
  animal_class;
  order;
  suborder;
  family;
  subfamily;
  genus;
  species;

  constructor(row) {
    this.id = row.id;
    this.animal_name = row.animal_name;
    this.kingdom = row.kingdom;
    this.phylum = row.phylum;
    this.animal_class = row.animal_class;
    this.order = row.order;
    this.suborder = row.suborder;
    this.family = row.family;
    this.subfamily = row.subfamily;
    this.genus = row.genus;
    this.species = row.species;
  }

  static async insert({ animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus }) {
    const { rows } = await pool.query(`INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus]);

    return new Animal(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM animals');
    return rows.map((row) => new Animal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM animals WHERE id=$1', [id]);
    return new Animal(rows[0]);
  }

  
};
