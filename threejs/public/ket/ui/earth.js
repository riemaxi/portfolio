import Element from "./common/element.js"
import Stage from "./common/stage.js"
import Factory from "./common/factory.js"

const content = `
<style>
    #root{
        width: 100%;
        height: 100%;
    }
</style>
<div id="root">
</div>
`

let factory = new Factory()

let setting = {
    size: {
        width: window.innerWidth, 
        height: window.innerHeight
    },
    camera: {
        setting: {
            fov: 75,
            aspect: window.innerWidth / window.innerHeight,
            near: .1, 
            far: 10
        },
        position: {x: 0, y: 0, z: 7}
    }
}

let stage = new class extends Stage{
    constructor(){
        super(setting)
    }
}
export default class Earth extends Element{
    constructor(){
        super(content)
    }
}

window.customElements.define('three-earth', Earth)