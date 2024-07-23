import Element from './common/element.js'
import Factory from './common/factory.js'
import Stage from './common/stage.js'

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

let factory = new Factory()

let stage = new class extends Stage{
    constructor(){
        super(setting)

        this.addObject(this.mesh = factory.createIcosahedron({setting: {size: 1.0, detail: 2}, standard: true, material: {color: '#FFAA00', flatShading: true}}))
        this.addLight(factory.createHemisphereLight(0xffffff,0x000000))
    }

    transform(t){
        //this.mesh.scale.setScalar(Math.cos(t * .001) + 1.0 )
    }
}



export default class Field extends Element{
    constructor(){
        super(content)

        this.shadow.appendChild(stage.element)

        stage.render()
    }

    control(){
        super.control()
    }
}

window.customElements.define('three-field', Field)