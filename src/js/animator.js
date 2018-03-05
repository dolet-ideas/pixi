let pixiSpriteToFullImg = function (PSprite) {
    // PSprite - PIXI.Sprite
    let windowAspect = width / height;
    let imageAspect = PSprite.width / PSprite.height;

    if (windowAspect > imageAspect) {
        PSprite.width = width;
        PSprite.height = width / imageAspect;
    } else {
        PSprite.height = height;
        PSprite.width = height * imageAspect;
    }

};
var animation = function (a, b) {

    bg = PIXI.Sprite.fromImage(massImg[a]);
    bg2 = PIXI.Sprite.fromImage(massImg[b]);
    
    bg.anchor.x = 0.5;
    bg.anchor.y = 0.5;
    
    bg.position.x = renderer.width / 2;
    bg.position.y = renderer.height / 2;
    
    stage.addChild(bg);
    ///////////////
    
    let stage2 = new PIXI.Container();
    
    bg2.anchor.x = 0.5;
    bg2.anchor.y = 0.5;
    
    stage2.position.x = renderer.width / 2;
    stage2.position.y = renderer.height / 2;
    
    stage2.addChild(bg2);
    
    stage.addChild(stage2);
    //////////////////////
    // let's create a moving shape
    thing = new PIXI.Graphics();
    stage.addChild(thing);
    
    thing.beginFill(0x8bc5ff, 0.4);
    thing.moveTo(0, 0);
    thing.lineTo(width, 0);
    thing.lineTo(width, height * 0);
    thing.lineTo(0, height * 0);
    
    
    stage2.mask = thing;
    
    // var count = 0;
    
    // $('body').on('click', () => {
        
        
        let t1 = new TimelineMax({ onUpdate: function () { renderer.render(stage); } });
        let obj = { a: 0 };
        
        bg2.position.y -= 100;
        // console.log('00000---');
        
        bg.position.x = renderer.width / 2;
        bg.position.y = renderer.height / 2;
        
        // console.log("pan", bg2.scale.x, bg2.scale.y);
        
        
        bg2.scale.x = 1;
        bg2.scale.y = 1;
        thing.clear;
        
        pixiSpriteToFullImg(bg);
        pixiSpriteToFullImg(bg2);
        
        t1
        .to(obj, 0.7, {
            a: 1, ease: Power3.easeOut, onUpdate: () => {
                let middle = (obj.a * obj.a + obj.a) / 2;
                thing.clear();
                
                thing.beginFill(0x8bc5ff, 0.4);
                thing.moveTo(0, 0);
                thing.lineTo(width, 0);
                thing.lineTo(width, height * obj.a * obj.a);
                thing.lineTo(0, height * obj.a);

                let rect = "rect(" + height * middle + "px," + width + "px," + height + "px,0)";
                let rect2 = "rect(" + 0 + "px," + width + "px," + height * middle + "px,0)";

                $(".section-1").css("clip", rect);
                $(".section-2").css("clip", rect2);

            }
        })
        .to(bg.position, 0.8, { y: "+=100" }, 0)
        .to(bg2.position, 1, { y: "+=100" }, 0)
        .to(bg2.scale, 1.5, { x: "+=0.018", y: "+=0.018" }, 1);
 
}


let width = $(window).width();
let height = $(window).height();

console.log('your display - width:', width);
console.log('your display - height:', height);

var loader = PIXI.loader;
var bg, bg2,  thing;
var massImg = ["img/1.jpg", "img/2.jpg", "img/3.jpg","img/4.jpg"]


var renderer = PIXI.autoDetectRenderer(width, height, { antialias: true });
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

loader
.add('a', 'img/1.jpg')
.add('b', 'img/2.jpg')
.add('c', 'img/3.jpg')
.add('d', 'img/4.jpg');


loader.load((loader, resources) => {
    // console.log('width---->', bg.width, resources.a.texture);    
    // Рисую первую загрузку
    bg = new PIXI.Sprite(resources.a.texture);
    
    bg.anchor.x = 0.5;
    bg.anchor.y = 0.5;
    
    bg.position.x = renderer.width / 2;
    bg.position.y = renderer.height / 2;
    
    
    pixiSpriteToFullImg(bg);

    stage.addChild(bg);
    renderer.render(stage);
})

stage.interactive = true;




PubSub.subscribe('gotoslide',(msg,data)=>{
    
    // $('[data-slide=' + data.from + ']').css({ opacity: 0 });
    // $('[data-slide=' + data.to + ']').css({opacity:1});
    // console.log('to GO => ', data);
    
    animation(data.from, data.to)
    
})