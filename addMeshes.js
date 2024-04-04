import * as THREE from 'three'

const textureLoader=new THREE.TextureLoader()

export const addBoilerPlateMesh=()=>{ //same as function addBoilerPlateMesh(){}
    const box=new THREE.BoxGeometry(1,1,1)
    const boxMaterial =new THREE.MeshBasicMaterial({color:0xff0000})
    const boxMesh=new THREE.Mesh(box,boxMaterial)
    boxMesh.position.set(2,0,0)
    return boxMesh
}

export function addStandardMesh(){
    const color=textureLoader.load('/textureCloth/Substance_Graph_basecolor.jpg')
    const displace=textureLoader.load('/textureCloth/Substance_Graph_height.jpg')
    const normal=textureLoader.load('/textureCloth/Substance_Graph_normal.jpg')
    const rough=textureLoader.load('/textureCloth/Substance_Graph_roughness.jpg')
    const box=new THREE.SphereGeometry(1,10,10)
    const boxMaterial=new THREE.MeshStandardMaterial({map:color,displacementMap:displace,displacementScale:.2,normalMap:normal,roughnessMap:rough,color:"aqua"})
    const boxMesh=new THREE.Mesh(box,boxMaterial)
    boxMesh.position.set(-2,0,0)
    return boxMesh
}
export function addStandardMesh1(){
    const color=textureLoader.load('/metalPlate/Sci-fi_Metal_Plate_003_basecolor.jpg')
    const displace=textureLoader.load('/metalPlate/Sci-fi_Metal_Plate_003_height.png')
    const normal=textureLoader.load('/metalPlate/Sci-fi_Metal_Plate_003_normal.jpg')
    const rough=textureLoader.load('/metalPlate/Sci-fi_Metal_Plate_003_roughness.jpg')
    const ambient=textureLoader.load('/metalPlate/Sci-fi_Metal_Plate_003_ambientOcclusion.jpg')
    const metallic=textureLoader.load('/metalPlate/Sci-fi_Metal_Plate_003_metallic.jpg')
    const box=new THREE.SphereGeometry(1,10,10)
    const boxMaterial=new THREE.MeshStandardMaterial({map:color,displacementMap:displace,displacementScale:.02,normalMap:normal,roughnessMap:rough,aoMap:ambient,metalnessMap:metallic})
    const boxMesh=new THREE.Mesh(box,boxMaterial)
    boxMesh.position.set(-2,0,0)
    return boxMesh
}
export function addSphereMesh(x,y,z,r,g,b,m){
    const color=textureLoader.load('/metalWall/Sci-Fi_Wall_014_basecolor.jpg')
    const displace=textureLoader.load('/metalWall/Sci-Fi_Wall_014_height.png')
    const normal=textureLoader.load('/metalWall/Sci-Fi_Wall_014_normal.jpg')
    const rough=textureLoader.load('/metalWall/Sci-Fi_Wall_014_roughness.jpg')
    const ambient=textureLoader.load('/metalWall/Sci-Fi_Wall_014_ambientOcclusion.jpg')
    const metallic=textureLoader.load('/metalWall/Sci-Fi_Wall_014_metallic.jpg')
    const sphere=new THREE.SphereGeometry(1, 10, 10)
    const sphereMaterial=new THREE.MeshStandardMaterial({color:"rgb("+r+","+g+","+b+")",map:color,displacementMap:displace,displacementScale:.22,normalMap:normal,roughnessMap:rough,aoMap:ambient,aoMapIntensity:5,metalnessMap:metallic,metalness:m})
    const sphereMesh=new THREE.Mesh(sphere,sphereMaterial)
    sphereMesh.position.set(x,y,z)
    return sphereMesh
}