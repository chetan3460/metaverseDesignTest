// Include images
let img_src = [
  '/images/home/3.webp',
  '/images/home/2.webp',
  '/images/home/3.webp',
  '/images/home/2.webp',

];

// Name images included
let image_type = img_src.map(function (cuurentEl, index) { return "image" + index });

// Configure particles-js
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": img_src.length, // No of images
        "density": {
          "enable": true,
          "value_area": 500 // Specify area (Lesser is greater density)
        }
      },
      "color": {
        "value": "#5affd4"
      },
      "shape": {
        "type": image_type, // Add images to particle-js
        "stroke": {
          "width": 0,
        },
        "polygon": {
          "nb_sides": 4
        }
      },
      "opacity": {
        "value": 1, // Adjust opactiy
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 50, // Adjust the image size
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 50,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1,   // Speed of particle motion
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
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
  }
);
