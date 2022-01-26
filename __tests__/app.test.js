const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('can get all animals', async () => {
    const { body } = await request(app).get('/animals');

    expect(body).toEqual(seedData);
  });

  it('can get an animal', async () => {
    const { body } = await request(app).get('/animals/1');

    expect(body).toEqual(seedData[0]);
  });

  it('can post an animal', async () => {
    const data = {
      animal_name: 'bobbert',
      kingdom: 'france',
      phylum: 'mitophylia',
      animal_class: 'very classy',
      animal_order: 'knights of candonia',
      suborder: 'subknights of candonia',
      family: 'the bobs',
      subfamily: 'da bois',
      genus: 'yes people have said im smart',
      species: 'human'
    };

    const { body } = await request(app).post('/animals')
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    data.id = 6;
    expect(body).toEqual(data);
  });

  it('can put an animal', async () => {
    const data = {
      animal_name: 'bobbert',
      kingdom: 'france',
      phylum: 'mitophylia',
      animal_class: 'very classy',
      animal_order: 'knights of candonia',
      suborder: 'subknights of candonia',
      family: 'the bobs',
      subfamily: 'da bois',
      genus: 'yes people have said im smart',
      species: 'human'
    };

    const { body } = await request(app).put('/animals/1')
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    data.id = 1;
    expect(body).toEqual(data);

  });

  it('can delete an animal', async () => {
    await request(app).delete('/animals/1');

    const { body } = await request(app).get('/animals');

    // eslint-disable-next-line no-unused-vars
    const [deleted, ...expected] = [...seedData];
    expect(body).toEqual(expected);
  });
});

const seedData = [
  {
    id: 1,
    animal_name: 'Lion',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    animal_class: 'Mammalia',
    suborder: 'Feliformia',
    family: 'Felidae',
    subfamily: 'Pantherinae',
    genus: 'Panthera',
    species: 'Panthera leo',
    animal_order: 'Carnivora'
  },
  {
    id: 2,
    animal_name: 'Tiger',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    animal_class: 'Mammalia',
    suborder: 'Feliformia',
    family: 'Felidae',
    subfamily: 'Pantherinae',
    genus: 'Panthera',
    species: 'Panthera tigris',
    animal_order: 'Carnivora'
  },
  {
    id: 3,
    animal_name: 'Leopard',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    animal_class: 'Mammalia',
    suborder: 'Feliformia',
    family: 'Felidae',
    subfamily: 'Pantherinae',
    genus: 'Panthera',
    species: 'Panthera pardus',
    animal_order: 'Carnivora'
  },
  {
    id: 4,
    animal_name: 'Snow Leopard',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    animal_class: 'Mammalia',
    suborder: 'Feliformia',
    family: 'Felidae',
    subfamily: 'Pantherinae',
    genus: 'Panthera',
    species: 'Panthera uncia',
    animal_order: 'Carnivora'
  },
  {
    id: 5,
    animal_name: 'Aldabra Giant Tortoise',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    animal_class: 'Reptilia',
    suborder: 'Cryptodira',
    family: 'Testudinoidea',
    subfamily: 'Testudinidae',
    genus: 'Aldabrachelys',
    species: 'Aldabrachelys Gigantea',
    animal_order: 'Testudines'
  }
];
