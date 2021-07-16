const request = require('supertest');
const db = require('../../data/dbConfig');
const Director = require('./directors-model');
const router = require('./directors-router');

const fincher = {name: 'David Fincher', genre:'Drama'};
const portman = {name: 'Natalie Portman', genre:'Drama'};

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db('directors').truncate();
});

afterAll(async () => {
    await db.destroy();
});

describe('endpoints', () => {
    describe('[POST]', () => {
        it('can create a new director', async () => {
            const res = await request(router).post('/directors').send({name: 'David Fincher', genre: 'drama'})
            expect(res.body).toMatchObject({directors_id: 1, name: 'David Fincher', genre: 'drama' })
        })
    })
    describe('[DELETE]', () => {
        it('returns a 201', async () => {
            const [id] = await db('directors').insert(portman)
            const res = await request(router).delete(`/directors/${id}`)
            expect(res.status).toBe(201)
        })
    })
})
