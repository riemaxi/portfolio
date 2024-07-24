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


let factory = new Factory()
let time = 0

class XStage extends Stage{
    constructor(setting, scale){
        super(setting)

        this.addObject(this.mesh = factory.createIcosahedron({setting: {size: 1.0, detail: 2}, standard: true, material: {color: '#FFAA00', flatShading: true}, scale }))
        this.addLight(factory.createHemisphereLight(0xffffff,0x000000))
    }

    render(t){
        time = t
        super.render(t)
    }

    transform(t){
        this.mesh.scale.setScalar(4 * Math.cos(t * .001) )
    }
}

let stage = null

export default class Field extends Element{
    constructor(){
        super(content)
    }

    control(){
        super.control()
    }

    initialize(){
        stage && stage.element.remove()

        let setting = {
            size: this.size,
            camera: {
                setting: {
                    fov: 75,
                    aspect: this.aspect,
                    near: .1, 
                    far: 10
                },
                position: {x: 0, y: 0, z: 7}
            }
        }

        stage = new XStage(setting, 4 * Math.cos(time * .001))

        this.shadow.appendChild(stage.element)

        stage.render(time)        
    }

    onResize(){
        this.initialize()
    }
}

window.customElements.define('three-field', Field)