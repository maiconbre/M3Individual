const jsonServer = require('Json-server');
const server = jsonServer.creat();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    //esnlint-disable-next-line no console
    console.log('JSON Server está funcionando.')
})