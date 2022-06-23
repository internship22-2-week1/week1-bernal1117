import express from "express";
// const express = require('express') -> si tuviera una version vieja de node

 export class UserRoutes{
    constructor(){
        this._inrouter = express.Router()
        this.registerRoutes()
    }

    registerRoutes(){
        this._inrouter.post('/user',(req,res)=>{ //aqui iria el controlador //funcion flecha cuando queramos respuesta inmediata
            console.log(req.method) // devuele el metodo de la peticion
            res.json({"message":"Ruta post"}) //Esto es jason, res = response = respuesta // req = request = peticion
        })
        this._inrouter.get('/user',(req,res)=>{
            console.log(req.method)                             //GET
            res.json({"message":"soy un get"})
        })
        this._inrouter.put('/user/:id',(req,res)=>{
            console.log(req.method)                             //PUT
            console.log(req.params.id)
            res.json({"Paramater":req.params.id})
        })
        this._inrouter.delete('/user/:id',(req,res)=>{
            console.log(req.method)                             //DELETE
            console.log(req.params.id)
            res.json({"Paramater":"ID BORRADO"})
        })
        this._inrouter.get('/user/:id',(req,res)=>{                            
            console.log(req.params.id)
            res.json({"Paramater":req.params.id})
        })
    }
    
}

