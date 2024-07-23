import UI from "./ui/index.js"

let ui = new class extends UI{
    constructor(){
        super()
    }
}

export default class Ket{
    constructor (){
        ui.on = data => this.on(data)
    }

    init(data){
       this.sesssion = data.session
    }

    response(id, data){
        switch(id){
        }
    }

    event(id, data){
        ui.update(id, data)
    }

    on(_){}
}
