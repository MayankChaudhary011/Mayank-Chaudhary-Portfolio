import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';






export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.roomChildren = {}

        this.lerp ={
            current:0,
            target:0,
            ease:0.1
        };

        this.setModel();
        this.onMouseMove();

    }

    setModel(){
        this.actualRoom.children.forEach((child)=>{
            child.castShadow = true;
            child.receiveShadow = true;

            if(child instanceof THREE.Group){
                child.children.forEach((groupChild)=>{
                  groupChild.castShadow = true;
            groupChild.receiveShadow = true;   
                })
            }

            console.log(child);

            if(child.name === "Computer"){
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map:this.resources.items.screen,
                })
            }

            if(child.name === "Mini_Floor"){
                child.position.x =8.15159 ;
                child.position.z =0.93539 ;
            }

            // if(child.name === "Mail_Box" ||
            // child.name === "floorfirst"||
            // child.name === "floorsecond"||
            // child.name === "Dirt"||
            // child.name === "MiniLamp"
            // ){
            //  child.scale.set(0,0,0)
            // }

             child.scale.set(0,0,0);
             if(child.name === "Cube"){
                // child.scale.set(1,1,1);
                child.position.set(0,4,0);
                child.rotation.y =Math.PI/4;
             }
             this.roomChildren[child.name.toLowerCase()] = child;
            // child.scale.set(0,0,0);
            //  if(child.name === "Cube"){
            //     child.scale.set(10,10,10);
            //     child.position.set(0,10,0);
            //     child.rotation.y = Math.PI/4;
            //  }

            //  this.roomChildren[child.name.toLowerCase()] = child
        });

const width =1;
const height = 1;
const intensity = 10;
const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
rectLight.position.set( 25.8662 , 22, 5.46815 );
// rectLight.position.set( 0 , 0, 0);

// const lampLight = new THREE.SpotLight(0xff0000, 1, 5, Math.PI / 20, 10,10);
// lampLight.position.set(25.8662 , 22, 5.46815 ); // Adjust based on lamp head position
// lampLight.target.position.set(0, 0, 0); // Pointing downward
// lampLight.castShadow = true;

// // Add both light and its target to the lamp
// // this.roomChildren.mini_lamp.add(lampLight);
// // this.roomChildren.mini_lamp.add(lampLight.target);
// this.actualRoom.add(lampLight);


rectLight.rotation.x = -Math.PI/2;
rectLight.rotation.z = Math.PI/4;
this.actualRoom.add( rectLight )




this.roomChildren["rectLight"] = rectLight;






// const rectLightHelper = new RectAreaLightHelper( rectLight );
// rectLight.add( rectLightHelper );

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11,0.11,0.11);

    }

    

    onMouseMove(){
        window.addEventListener("mousemove",(e)=>{
            this.rotation=
            ((e.clientX - window.innerWidth/2)*2)/window.innerWidth;
            this.lerp.target = this.rotation*0.1;
        })
    }

    resize(){
      
    }

    update(){

        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        )
      this.actualRoom.rotation.y = this.lerp.current
}

}