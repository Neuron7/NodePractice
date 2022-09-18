const express = require('express');
const { appendFile } = require('fs');
const routes = express.Router();
const util = require('./util.js');

routes.get("/", (req,res)=>{
    let trades = util.get(null);
    res.send(trades);
})

routes.post("/", (req,res)=>{
    let stock = req.body;
    util.create(stock);
    res.send("Post is Running");
    
})

routes.get("/:id", (req,res)=>{
    let id = req.params.id;
    let trade = util.get(id)
    res.send(trade);
})

routes.patch("/", (req, res)=>{
    res.status(405).send("PATCH is running");
})

routes.put("/", (req, res)=>{
    res.status(405).send("Put is this");
})

routes.delete("/", (req, res)=>{
    res.status(405).send("Delete kr dunga");
})

routes.get("*", (req, res)=>{
    res.status(405).send("Wrong API Route");
})

module.exports = routes;