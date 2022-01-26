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
    this.animal_order = row.animal_order;
    this.suborder = row.suborder;
    this.family = row.family;
    this.subfamily = row.subfamily;
    this.genus = row.genus;
    this.species = row.species;
  }

  static async insert({ animal_name, species, kingdom, phylum, animal_class, animal_order, suborder, family, subfamily, genus }) {
    const { rows } = await pool.query(`INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, animal_order, suborder, family, subfamily, genus)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;`, [animal_name, species, kingdom, phylum, animal_class, animal_order, suborder, family, subfamily, genus]);

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

  static async updateById(id, { animal_name, species, kingdom, phylum, animal_class, animal_order, suborder, family, subfamily, genus }) {
    const { rows } = await pool.query(`UPDATE animals
    SET animal_name=$1, species=$2, kingdom=$3, phylum=$4, animal_class=$5, animal_order=$6, suborder=$7, family=$8, subfamily=$9, genus=$10
    WHERE id=$11
    RETURNING *;`, [animal_name, species, kingdom, phylum, animal_class, animal_order, suborder, family, subfamily, genus, id]);
    return new Animal(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query('DELETE FROM animals WHERE id=$1 RETURNING *;', [id]);
    if(!rows) return null;
    return new Animal(rows[0]);
  }
};
