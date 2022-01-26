-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  animal_name VARCHAR(256) NOT NULL,
  kingdom VARCHAR(256) NOT NULL,
  phylum VARCHAR(256) NOT NULL,
  animal_class VARCHAR(256) NOT NULL,
  order VARCHAR(256) NOT NULL,
  suborder VARCHAR(256) NOT NULL,
  family VARCHAR(256) NOT NULL,
  subfamily VARCHAR(256) NOT NULL,
  genus VARCHAR(256) NOT NULL
  species VARCHAR(256) NOT NULL,
);

INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus)
VALUES ('Lion', 'Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Feliformia', 'Felidae', 'Pantherinae', 'Panthera', 'Panthera leo');

INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus)
VALUES ('Tiger', 'Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Feliformia', 'Felidae', 'Pantherinae', 'Panthera', 'Panthera tigris');

INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus)
VALUES ('Leopard', 'Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Feliformia', 'Felidae', 'Pantherinae', 'Panthera', 'Panthera pardus');

INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus)
VALUES ('Snow Leopard', 'Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Feliformia', 'Felidae', 'Pantherinae', 'Panthera', 'Panthera uncia');

INSERT INTO animals (animal_name, species, kingdom, phylum, animal_class, order, suborder, family, subfamily, genus)
VALUES ('Aldabra giant tortoise', 'Animalia', 'Chordata', 'Reptilia', 'Testudines', 'Cryptodira', 'Testudinoidea', 'Testudinidae', 'Aldabrachelys', 'Aldabrachelys Gigantea');
