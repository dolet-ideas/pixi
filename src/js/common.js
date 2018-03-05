
import 'pixi.js';
import { TimelineMax } from 'gsap';
import * as PubSub from 'pubsub-js';



import Animator from "./animator";
import Paginator from "./paginator";
import './navig';

let a = new Paginator();

// let width = $(window).width();
// let height = $(window).height();


// var renderer = PIXI.autoDetectRenderer(width, height, { antialias: true });
// document.body.appendChild(renderer.view);

// let loader = PIXI.loader;
// let bg, bg2, thing;
// bg2 = PIXI.Sprite.fromImage("img/1.jpg");
// bg = PIXI.Sprite.fromImage("img/2.jpg");

// loader
//   .add('first','img/1.jpg')
//   .add('second','img/2.jpg');

// loader.load((loader,resources)=>{
//     renderer.render(stage);
    
// })
// // create the root of the scene graph
// var stage = new PIXI.Container();


// bg.anchor.x = 0.5;
// bg.anchor.y = 0.5;

// bg.position.x = renderer.width / 2;
// bg.position.y = renderer.height / 2;

// stage.addChild(bg);

// var container = new PIXI.Container();

// bg2.anchor.x = 0.5;
// bg2.anchor.y = 0.5;

// container.position.x = renderer.width / 2;
// container.position.y = renderer.height / 2;

// container.addChild(bg2);

// stage.addChild(container);

// // let's create a moving shape
// thing = new PIXI.Graphics();
// stage.addChild(thing);

//   thing.beginFill(0x8bc5ff, 0.4);
//   thing.moveTo(0, 0);
//   thing.lineTo(width, 0);
//   thing.lineTo(width, height * 0);
//   thing.lineTo(0, height * 0);


// container.mask = thing;

// // var count = 0;

// $('body').on('click',()=>{


//   let t1 = new TimelineMax({onUpdate:function  () {renderer.render(stage);}});
//   let obj = {a:0};
  
//   bg2.position.y -= 100;
  
//   bg.position.x = renderer.width / 2;
//   bg.position.y = renderer.height / 2; 

//   console.log("pan", bg2.scale.x, bg2.scale.y);
  

//   bg2.scale.x = 1 ;
//   bg2.scale.y = 1;



//   t1
//     .to(obj, 0.7, { a: 1, ease: Power3.easeOut, onUpdate: () => {
//         let middle = (obj.a * obj.a + obj.a) / 2;
//         thing.clear();

//         thing.beginFill(0x8bc5ff, 0.4);
//         thing.moveTo(0, 0);
//         thing.lineTo(width, 0);
//         thing.lineTo(width, height * obj.a * obj.a);
//         thing.lineTo(0, height * obj.a);

//         let rect = "rect(" + height * middle + "px," + width + "px," + height + "px,0)";
//         let rect2 = "rect(" + 0 + "px," + width + "px," + height * middle + "px,0)";

//       $(".section-1").css("clip", rect);
//       $(".section-2").css("clip", rect2);

//       } })
//     .to(bg.position, 0.8, { y: "+=100" }, 0)
//     .to(bg2.position, 1, { y: "+=100" }, 0)
//     .to(bg2.scale, 2, { x: "+=0.2", y: "+=0.2" }, 1);
// })