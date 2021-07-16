const express = require('express');
const Director = require('./directors-model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Director.getEm()
    .then(directors => {
        res.status(200).json(directors)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Director.addDirector(req.body)
    .then(newDirector => {
        res.status(201).json(newDirector)
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Director.deleteDirector(req.params.id)
    .then(numberOfDeletedDirectors => {
        res.status(201).json(numberOfDeletedDirectors)
    })
    .catch(next);
})

module.exports = router