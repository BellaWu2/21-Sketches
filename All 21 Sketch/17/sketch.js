var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = "90px Times";
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillText("H",0,65,280); 
var pix = ctx.getImageData(-100,0,180,70);
window.addEventListener('resize',canvasResize);
function canvasResize(){
    canvas.width = 1000;
  canvas.height = 1000;
}
canvasResize();
var cx = canvas.width/2-(280*5/2);
var cy = canvas.height/2-(65*5/2);
class Particle{
    constructor(){
        this.arr = [];
    }
    init(){
        for(let i=0;i<pix.data.length/4;i++){
             this.arr.push({
                x:i%180,
                y:i/180,
                alpha:pix.data[i*4+3],
                mx:Math.random()*canvas.width,
                my:Math.random()*canvas.height,
                radius:Math.random()*3,
                speed:Math.random()*40+40,
                color:`rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255},${pix.data[i*4+3]}`
             })
        }
    }
    draw(){          
        this.arr.forEach(item=>{
            ctx.beginPath();
            ctx.fillStyle = item.color;
            ctx.arc(item.mx,item.my,item.radius,0,Math.PI*2,false);
            ctx.fill();
        })
    }
    update(){
           for(let i=0;i<this.arr.length;i++){
               this.arr[i].mx = this.arr[i].mx + ((this.arr[i].x*5+cx)-this.arr[i].mx)/this.arr[i].speed;
               this.arr[i].my = this.arr[i].my + ((this.arr[i].y*5+cy)-this.arr[i].my)/this.arr[i].speed;
           }
    }
}      
const particle = new Particle();
particle.init();

window.addEventListener('resize',function(){
   particle.arr = [];  
   particle.init();
    cx = canvas.width/2-(280*5/2);
    cy = canvas.height/2-(65*5/2);
})

function step(){
ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  particle.draw(); 
  particle.update(); 
 
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);