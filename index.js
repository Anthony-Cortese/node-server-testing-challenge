// require('dotenv').config({path: require('./env')});

const server = require('./api/server');

const port = process.env.PORT || 6000;

server.listen(port, () => {
    console.log(`Server running on Natalie Portman ${port}`)
});
