module.exports = () => 
    `const {innerWidth, innerHeight} = window;
     const renderer = new THREE.WebGLRenderer();
     renderer.setSize(innerWidth, innerHeight);
     const scene = new THREE.Scene();
     const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
     const render = () => {
         renderer.render(scene, camera);
     }
     document.body.appendChild(renderer.domElement);
    `