const db = require('../../data/dbConfig');
const Director = require('./directors-model');

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
})

describe('Directors Model', () => {
    describe('getEm function', () => {
        it('returns directors array', async () => {
            const res = await db('directors');
            expect(res).toHaveLength(0);
        });
    });

    describe('addDirector function', () => {
        it('adds director to db', async () => {
            let res;
            await db('directors').insert(portman);
            res = await db('directors');
            expect(res).toHaveLength(1);
        });
        it('values of directors are correct', async () => {
            const director = await Director.addDirector(fincher)
            expect(director).toMatchObject({directors_id: 1, ...fincher})
        });
    });
    describe('deleteDirector', () => {
        it('deletes added director from db', async () => {
            const [id] = await db('directors').insert(portman)
            await db('directors').where('directors_id', id).del()
            const directorsArr = await db('directors')
            expect(directorsArr).toHaveLength(0)

        });
    });
})
