

export function particle(){

 particlesJS('particlesjs', {
            particles: {
    "number": {
      "value": 95,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 4
      }
    },

   "opacity": {
      "value": 0.81,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },


    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
                line_linked: {
                    enable_auto: true,
                    distance: 160,
                    color: '#515152',
                    opacity: .4,
                    width: 1,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                }
            },


 "interactivity": {
   detect_on: 'window', // "canvas" or "window"
    "events": {
      "onhover": {
        "enable": true,
        "mode":"grab",
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 250,
        "line_linked": {
          "opacity": .5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true


})
}