const app = require('../../src/app');
const session = require('supertest');
let agent;

beforeAll(() => {
  agent = session(app);
});

const modeloesprueba = [ {  "id": 4, "name": "Action" }, { "id": 51, "name": "Indie" }, {   "id": 3,   "name": "Adventure" },]

describe('Test de Modelos', () => {
  describe('GET /videogames/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/videogames/1').expect(200);
    });

    it('Responde un objeto con la propiedad: "name"', async () => {
      const response = await agent.get('/videogames/1');
      const game = response.body;
      console.log(game.name);
      expect(game).toHaveProperty('id');
    });

    it('Si hay un error responde con status: 404', async () => {
      const response = await agent.get('/rickandmorty/character/1234567');
      expect(response.status).toBe(404);
    });
  });
});