const db = require('../../data/dbConfig');

function getEm () {
    return db('directors')
}

async function addDirector(add) {
    const [id] = await db('directors').insert(add)
    return db('directors').where('directors_id', id).first()
}

function deleteDirector(id) {
    return('directors').where('directors_id', id).del()
}

module.exports = {
    getEm,
    addDirector,
    deleteDirector
}