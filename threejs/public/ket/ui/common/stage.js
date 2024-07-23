import * as THREE from "three"

export default class Stage{
    constructor(setting){
        this.renderer = new THREE.WebGLRenderer({antialias: true})

        let  {size, camera} = setting
        this.renderer.setSize(size?.width, size?.height)

        this.cameras = {
            main: new THREE.PerspectiveCamera(camera?.setting?.fov, camera?.setting?.aspect, camera?.near, camera?.setting?.far)
        }

        this.mainCamera.position.z = camera?.position?.z || 2

        this.scene = new THREE.Scene()
    }

    get mainCamera(){
        return this.cameras.main
    }

    get element(){
        return this.renderer.domElement
    }

    addCamera(id, data){
        let {perspective, setting, position} = data
        let {fov, aspect, near, far} = setting 
        let {x, y, z} = position
        let camera = perspective ? new THREE.PerspectiveCamera(fov, aspect, near, far) : new THREE.OrthographicCamera(fov, aspect, near, far)

        camera.position.x = x || 0
        camera.y = y || 0
        camera.z = z || 2

        this.cameras[id] = camera
    }

    addObject(object){
        this.scene.add(object)
    }
    addLight(light){
        this.scene.add(light)
    }

    render(t = 0){
        this.renderer.render(this.scene, this.mainCamera)
        this.transform(t)
        window.requestAnimationFrame(t => this.render(t))
    }

    transform(){}
}