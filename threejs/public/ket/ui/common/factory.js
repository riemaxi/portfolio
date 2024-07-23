import * as THREE from 'three'

export default class Factory{
    constructor(){

    }

    createIcosahedron(data){
        let  {size, detail} = data.setting
        let object = new THREE.IcosahedronGeometry(size, detail)
        let material = data.standard ? new THREE.MeshStandardMaterial(data.material) : new THREE.MeshBasicMaterial(data.material)
        let mesh = new THREE.Mesh(object, material)
    
        return mesh
    }    

    createHemisphereLight(sky, ground){
        return new THREE.HemisphereLight(sky, ground)
    }
}

