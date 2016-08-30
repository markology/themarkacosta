
import particleground from './../../js/particle.js'


export function drawText(b) {
  b.state.ctx.clearRect(0, 0, b.state.W, b.state.H);
  b.state.ctx.fillStyle = "#fff";
  b.state.ctx.font = "600 80px pier";
  b.state.ctx.textAlign = "center";
  b.state.ctx.fillText(b.state.keyword, b.state.W/2, b.state.H/2);
}

export function positionParticles(b) {
  // Get the data
var Particle = function() {
		  this.w =  2;
		  this.h =  2;
		  this.x = -b.state.W;
		  this.y = -b.state.H;
		  this.free = false;
		  
		  this.vy = -2 + parseInt(Math.random() * 10) / 2;
		  this.vx = -4 + parseInt(Math.random() * 8);
		  
		  // Color
		  this.a = Math.random();

		  
		  this.setPosition = function(x, y) {
		    this.x = x ;
		    this.y = y ;
		  };
		  
		  this.draw = function() {
		    b.state.ctx.fillStyle = "#fff";
		    b.state.ctx.fillRect(this.x, this.y,  this.w ,  this.h );
		  }
		};  
  b.state.imageData = b.state.ctx.getImageData(0, 0, b.state.W,b.state. W);
  var data = b.state.imageData.data;
  
  // Iterate each row and column
  for (var i = 0; i < b.state.imageData.height; i += b.state.density) {
    for (var j = 0; j < b.state.imageData.width; j += b.state.density) {
      
      // Get the color of the pixel
      var color = data[((j * ( b.state.imageData.width * 4)) + (i * 4)) - 1];
      
      // If the color is black, draw pixels
      if (color == 255) {
        b.state.particles.push(new Particle());
        b.state.particles[b.state.particles.length - 1].setPosition(i, j);
      }
    }
  }
}


function drawText(b) {
  b.state.ctx.clearRect(0, 0, b.state.W, b.state.H);
  b.state.ctx.fillStyle = "#fff";
  b.state.ctx.font = "600 60px pier";
  b.state.ctx.textAlign = "center";
  b.state.ctx.fillText(b.state.keyword, b.state.W/2, b.state.H/2);
}

function positionParticles(b) {
  // Get the data
var Particle = function() {
		  this.w =  2;
		  this.h =  2;
		  this.x = -b.state.W;
		  this.y = -400;
		  this.free = false;
		  
		  this.vy = -2 + parseInt(Math.random() * 20) / 4;
		  this.vx = -4 + parseInt(Math.random() * 8);
		  
		  // Color
		  this.a = Math.random();

		  
		  this.setPosition = function(x, y) {
		    this.x = x - 250;
		    this.y = y - 360;
		  };
		  
		  this.draw = function() {
		    b.state.ctx.fillStyle = "#fff";
		    b.state.ctx.fillRect(this.x, this.y,  this.w ,  this.h );
		  }
		};  
  b.state.imageData = b.state.ctx.getImageData(0, 0, b.state.W,b.state. W);
  var data = b.state.imageData.data;
  
  // Iterate each row and column
  for (var i = 0; i < b.state.imageData.height; i += b.state.density) {
    for (var j = 0; j < b.state.imageData.width; j += b.state.density) {
      
      // Get the color of the pixel
      var color = data[((j * ( b.state.imageData.width * 4)) + (i * 4)) - 1];
      
      // If the color is black, draw pixels
      if (color == 255) {
        b.state.particles.push(new Particle());
        b.state.particles[b.state.particles.length - 1].setPosition(i, j);
      }
    }
  }
}
export  function gunk(b, refresh){

	window.requestAnimFrame = (function(){
		  return  window.requestAnimationFrame || 
		    window.webkitRequestAnimationFrame || 
		    window.mozRequestAnimationFrame    || 
		    window.oRequestAnimationFrame      || 
		    window.msRequestAnimationFrame     || 
		    function( callback ){
		      window.setTimeout(callback, 1000 / 60);
		    };
		})();

		function chip(){
			setTimeout(() => {
				funnel = true;
				chip();
			}, 1200)
		}

		var canvas = document.createElement('canvas');
		canvas.id = 'canvas';

	    b.state.ctx = canvas.getContext("2d"),
	    b.state.keyword = `I'm Mark,`
	    b.state.density =2;
	    var mouse = {},
	    hovered = false,
	    colors = ["225, 190, 44", "225, 190, 44", "225, 190, 44"];
	    b.state.minDist =25;
	    var bounceFactor = .4;
		b.state.W = 1000,
	    b.state.H = 800;
	    var funnel = true;

		canvas.width = 1000;
		canvas.height =  800;
		chip();

		

		// Particle Object
		

		b.state.particles = [];


		// Draw the text


		// Clear the canvas
		function clear() {
		  b.state.ctx.clearRect(0, 0, b.state.W, b.state.H);
		}

		// Get pixel positions
		$('#the-mark-acosta').append(canvas)
		$('#canvas').on("mousemove", function(e) {
				var rect = canvas.getBoundingClientRect(), // abs. size of element
				      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
				      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

			
				        // been adjusted to be relative to element
				  
			  mouse.x =	(e.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have

			  mouse.y =(e.clientY - rect.top) * scaleY;
			});
		document.fonts.ready.then(function () {
			drawText(b)
			positionParticles(b);
		});	
		// Update
		function update() {
		  clear();
		  var temp= Math.floor(Math.random()  * b.state.particles.length)

		  // console.log(temp)
		  
		  for(var i = 0; i < b.state.particles.length; i++) {
		    var p = b.state.particles[i];
		    if(temp == i && funnel){
		    	hovered = true;
		    	p.free = true
		    	funnel = false;
		    	p.vx = 0;
		    }
		    if(mouse.x > p.x -10 && mouse.x < p.x + 10 + p.w && mouse.y > p.y -10 && mouse.y < p.y + p.h + 10) 
		      hovered = true;
		    
		    if(hovered == true) {
		      
		      var dist = Math.sqrt((p.x - mouse.x)*(p.x - mouse.x) + (p.y - mouse.y)*(p.y - mouse.y));
		      
		      if(dist <= b.state.minDist)
		        p.free = true;
		      
		      if(p.free == true) {
		        p.y += p.vy;
		        p.vy += 0.65;
		        p.x += p.vx;
		        
		        // Collision Detection
		        if(p.y + p.h > b.state.H) {
		          p.y = b.state.H - p.h;
		          p.vy *= -bounceFactor;
		          
		          // Friction applied when on the floor
		          if(p.vx > 0)
		            p.vx -= 0.1;
		          else 
		            p.vx += 0.1;
		        }
		        
		        if(p.x + p.w > b.state.W) {
		          p.x = b.state.W - p.w;
		          p.vx *= -bounceFactor;
		        }
		        
		        if(p.x < 0) {
		          p.x = 0;
		          p.vx *= -0.5;
		        }
		      }
		    }
		    
		    b.state.ctx.globalCompositeOperation = "lighter";
		    p.draw();
		  }
		}


		(function animloop(){
		  requestAnimFrame(animloop);
		  update();
		})();		
}  