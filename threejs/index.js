const config = require('./config')

class Session{
    constructor(socket, id){
        this.socket = socket
        this.id = id
        
        this.notify('init', { session: {id} })
    }

    onRequest({id, data}){
        console.log(id, data)
    }


    notify(id, data){
         this.socket.emit(id, data)
    }

    close(){

    }
}

let desk = new class extends require('./desk'){
    constructor(){
        super(config.desk)
    }

    onListening(){
        console.log(config.desk.port)
    }

    openSession(socket, id){
        return new Session(socket, id)
    }

}