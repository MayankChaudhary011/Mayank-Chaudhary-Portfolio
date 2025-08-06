import * as THREE from "three";

import GSAP from "gsap";


import Experience from "../Experience.js";


export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setFloor();
        this.setCircles();


    }

    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100,100);
        this.material = new THREE.MeshStandardMaterial({
            color:0xFFF0D1,
            side : THREE.BackSide,

        })

        this.plane = new THREE.Mesh(this.geometry,this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = Math.PI/2
        this.plane.position.y = -0.3
        this.plane.receiveShadow = true;
    }

       setCircles(){
const geometry = new THREE.CircleGeometry( 50, 64 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x333446 } ); 
const material2 = new THREE.MeshStandardMaterial( { color: 0x4E71FF } ); 
const material3 = new THREE.MeshStandardMaterial( { color: 0xB22222 } ); 

this.circleFirst = new THREE.Mesh( geometry, material ); 
this.circleSecond = new THREE.Mesh( geometry, material2 ); 
this.circleThird = new THREE.Mesh( geometry, material3 ); 


this.circleFirst.position.y =-0.29;
this.circleFirst.position.z =0;
this.circleFirst.position.x =0;

this.circleSecond.position.y =-0.28;

this.circleThird.position.y =-0.27;

this.circleFirst.scale.set(0,0,0);
this.circleSecond.scale.set(0,0,0) ;
this.circleThird.scale.set(0,0,0) ;

this.circleFirst.rotation.x = 
this.circleSecond.rotation.x=
this.circleThird.rotation.x =
-Math.PI/2;

this.circleFirst.receiveShadow = 
this.circleSecond.receiveShadow=
this.circleThird.receiveShadow =
true;

this.scene.add( this.circleFirst );
this.scene.add( this.circleSecond );
this.scene.add( this.circleThird );
       }

    resize(){
      
    }

    update(){

}

}