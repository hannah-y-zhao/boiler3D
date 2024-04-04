//run: npm run dev OR sudo npm run dev

import "./style.css";
import * as THREE from "three";
import { addBoilerPlateMesh,addStandardMesh,addSphereMesh, addStandardMesh1} from "./addMeshes";
import { addLight } from "./addLights";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
); //fov, aspect ratio, near, far
camera.position.set(0,0,5)
const meshes={}

let tick=0
init();

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // const geometry = new THREE.BoxGeometry(1, 1, 1);
  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); //red
  // const mesh = new THREE.Mesh(geometry, material);
  // mesh.position.set(0, 0, -5);
  // scene.add(mesh);
  // meshes.default=mesh
  // scene.add(meshes.default)

  //meshes
  // meshes.default=addBoilerPlateMesh()
  meshes.standard=addStandardMesh()
  meshes.standard1=addStandardMesh1()

  // meshes.sphere=[]
  for(let i=0;i<5;i++){
    let randR=Math.floor(Math.random()*255)
    let randG=Math.floor(Math.random()*255)
    let randB=Math.floor(Math.random()*255)
    let randM=(Math.random()*2)
    meshes.i=addSphereMesh(5-(i*2),-3+i,-3+i,randR,randG,randB,randM)
    scene.add(meshes.i)
  }

  //lights
  meshes.defaultLight=addLight()
  // console.log(meshes)

  //scene operationss
  // scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.standard1)
  scene.add(meshes.defaultLight)
  // scene.add(meshes.sphere)

  resize()
  animate();
}
function resize(){
  window.addEventListener("resize",()=>{
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera.aspect=window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate() {
  requestAnimationFrame(animate);
  tick+=0.1
  // console.log(scene.children)

  // meshes.default.position.x+=0.01
  // meshes.default.rotation.z+=0.01
  meshes.standard.rotation.z-=0.01
  meshes.standard.rotation.x+=0.01
  meshes.standard.position.y=Math.sin(tick*.1)*3
  meshes.standard.position.x=Math.cos(tick*.1)*3

  meshes.standard1.position.y=Math.sin(tick*.05)*4
  meshes.standard1.position.x=Math.cos(tick*.05)*4
  // meshes.default.position.y=Math.sin(tick*.2)*4
  // meshes.default.position.x=Math.cos(tick*.2)*4
  scene.children[0].position.x=Math.cos(tick*.2)*4
  scene.children[0].position.y=Math.sin(tick*.2)*4

  scene.children[1].position.x=Math.cos(tick*.2)*2
  scene.children[1].position.y=Math.sin(tick*.2)*2
  
  scene.children[2].position.x=Math.cos(tick*.15)*4
  scene.children[2].position.y=Math.sin(tick*.15)*4

  scene.children[3].position.x=Math.cos(tick*.35)*4
  scene.children[3].position.y=Math.sin(tick*.35)*4
  
  scene.children[4].position.x=Math.cos(tick*.3)*2
  scene.children[4].position.y=Math.sin(tick*.3)*2

  // meshes.sphere.rotation.x+=0.01
  renderer.render(scene, camera);
}
