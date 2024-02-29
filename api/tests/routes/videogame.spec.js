
const app = require('../../src/app');
const session = require('supertest');
let agent;

beforeAll(() => {
  agent = session(app);
});


describe('Test de RUTAS', () => {
  describe('GET /videogames/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/videogames/1').expect(200);
    });

    it('Responde un objeto con la propiedad: "name"', async () => {
      const response = await agent.get('/videogames/1');
      const game = response.body;
      expect(game).toHaveProperty('id');
    });

    it('Si hay un error responde con status: 404', async () => {
      const response = await agent.get('/rickandmorty/character/1234567');
      expect(response.status).toBe(404);
    });
  });
  describe('GET /diveogames/name', ()=>{
    it('Responde con status: 200', async () => {
      await agent.get('/videogames/name?name=gta').expect(200);
    });
    it('Responde un objeto con la propiedad: "name"', async () => {
      const response = await agent.get('/videogames/name?name=gta');
      const game = response.body;
      expect(game).toHaveLength(15);
    });
    it('Si hay un error responde con status: 404', async () => {
      const response = await agent.get('/videogames/nameeeeeeee?======');
      expect(response.status).toBe(500);
    });
  })
});

afterAll(() => {
  agent = null;
});