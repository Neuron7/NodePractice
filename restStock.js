const server = require('express');
const app = server();
const routes = require('./stockRoutes.js');

app.use(server.json()) // for parsing application/json
app.use(server.urlencoded({ extended: true }))

app.use("/trades", routes);//middleware

app.listen(8002, ()=>{
    console.log("Service is running at 8002");
});