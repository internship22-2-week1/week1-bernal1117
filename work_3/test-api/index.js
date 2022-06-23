//import nuevoServer from './Server.js' asi se llama a = export default nombre 
import { Server } from './Server.js' //asi se importa los puntos sirven para los niveles ./ ../ .../

function main(){
    const server = new Server()
    server.start() 
}

main()