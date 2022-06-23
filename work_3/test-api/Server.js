//const Http = require('http')
import express from "express";
import { UserRoutes } from "./Routes.js"; // llamando a la clase hecha en Routes.js

const useroutes = new UserRoutes() //para poder llamar a la clase y agregar solo un metodo

export class Server{ //EXPORT para poder usarlos en otras paginas 
    constructor(){
        this._app = express()
        this._port = 7000
        this.initMiddlewares()
        this.initRoutes()
    }
    initMiddlewares(){ //Este metodo verifica que los datos vengan en formato json - son como guardias de seguridad
        this._app.use(express.json())
    }
    initRoutes(){
        this._app.use('/api/v2',useroutes._inrouter) //Propiedad especifica de la clase UserRoutes
    }

    start(){
        this._app.listen(this._port,()=>{
            console.log("Servidor iniciado")
        })
    }
}

