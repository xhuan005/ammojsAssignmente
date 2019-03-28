if (!Detector.webgl) {
	Detector.addGetWebGLMessage();
	document.getElementById('container').innerHTML = '';
}

//Drawing variable
var camera, controls, scene, renderer;

//phiysics variables
var gravityConstant = -9.8;

//mouse
var mouseCoords = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

//material
var ballMaterial = new THREE.MeshPhongMaterial( { color: 0x202020 } );

init();
animate();


//init everything
function init(){
	initScene();
	initPhysics();
	initShapes();
}

function initScene(){
	container = document.getElementById('container');
	
	camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 2000);
	camera.position.x = camera.position.y = camera.position.z = 5;
	
	controls.target.y = 2;
	renderer = new THREE.WebGLRenderer();
}
