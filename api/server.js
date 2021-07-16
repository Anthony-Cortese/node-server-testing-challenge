const express = require('express');
const directorRouter = require('./directors/directors-router');
const server = express();

server.use(express.json());
server.use('/directors', directorRouter);

server.get('/', (req, res) => {
    res.status(200).json({api: 'Up n Runnin Chief'});
})

server.get('*', (err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Yikes this will not work',
        message: err.message,
        stack: err.stack
    });
});

module.exports = server;