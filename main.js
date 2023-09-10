
// TODO: zoom with wheel (three js control)
// TODO: 1 million trees (tree slider)
// TODO: fog

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_outline.html
// https://sbcode.net/threejs/annotations/
// https://stackoverflow.com/questions/18401213/how-to-animate-the-camera-in-three-js-to-look-at-an-object
// https://phrase.com/blog/posts/step-step-guide-javascript-localization/

import './style.css';

import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {useGeographic} from 'ol/proj.js';

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
//import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
//import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
//import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
//import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

const gridSize = 1000;
const gridResolution = 1000;

let renderer;

let camera;
let viewLerpRatio = 0.04;
let viewTargetPositionDelta = new THREE.Vector3(0, 0, 0);
let viewCurrentPositionDelta = new THREE.Vector3(0, 0, 100);
let viewTargetUp = new THREE.Vector3(0, 0, 1);
let viewCurrentUp = viewTargetUp.clone();

let controls;

let directionalLight;

let scene;

let mapView;
let map;
let mapPlane;
let mapGeometry;
let groundPlane;
let grid;

let tractor;
let tractorVelocity = 0.001;

const trees = new Array();

let drone;

let stats;

let time = 0;

// -------------------------------------------------------  event handlers  --

function enterFullscreenOnClick() {
	navbarExitFullscreen.classList.remove('d-none');
	navbarEnterFullscreen.classList.add('d-none');

	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} else if (document.documentElement.webkitRequestFullscreen) { // Safari
	  	document.documentElement.webkitRequestFullscreen();
	} else if (document.documentElement.msRequestFullscreen) { // IE11
	  	document.documentElement.msRequestFullscreen();
	}	
}

function exitFullscreenOnClick() {
	navbarExitFullscreen.classList.add('d-none');
	navbarEnterFullscreen.classList.remove('d-none');

	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { // Safari
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { // IE11
		document.msExitFullscreen();
	}	
}

function documentOnKeydown(event) {
	console.log(event.keyCode);

	switch (event.keyCode) {
		case 37: // left
			tractor.rotation.z += 0.01;
			break;
		case 39: // right
			tractor.rotation.z -= 0.01;
			break;
		case 38: // up
			break;
		case 40: // down
			break;
		case 32:  // space
			break;
	}
}

function windowOnResize() {
	const width = window.innerWidth;
	const height = window.innerHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
//	composer.setSize( width, height );

//	effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
}

function mapOnPostRender() {
	let canvas = document.getElementById('mapCanvas').children[0].children[0].children[0].children[0];
	const texture = new THREE.CanvasTexture(canvas);

	const material = new THREE.MeshBasicMaterial({map: texture});
	if (mapPlane != null) {
		scene.remove(mapPlane);
	}
	mapPlane = new THREE.Mesh(mapGeometry, material);

	scene.add(mapPlane);
};
	
// -----------------------------------------------------------------  init  --

function init() {
	window.addEventListener('resize', windowOnResize);
	document.addEventListener('keydown', documentOnKeydown);

	navbarEnterFullscreen.addEventListener('click', enterFullscreenOnClick);
	navbarExitFullscreen.addEventListener('click', exitFullscreenOnClick);

	initThree();
	initStats();
	initMap();
}

function initStats() {
	stats = new Stats();
	stats.showPanel(0);
	stats.dom.style = "";
	debugCardFPS.appendChild(stats.dom);
}

function initThree() {
	renderer = new THREE.WebGLRenderer({
		canvas: threeCanvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);

	// let composer = new EffectComposer(renderer);

	// const renderPass = new RenderPass(scene, camera);
	// composer.addPass(renderPass);
	
	// const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
	// composer.addPass(outlinePass);
	
	// const outputPass = new OutputPass();
	// composer.addPass(outputPass);
	
	camera = new THREE.PerspectiveCamera( 
		75, 
		window.innerWidth / window.innerHeight, 
		0.1, 
		1000);

	controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10.0;
    controls.maxPolarAngle = Math.PI / 180.0 * 80;
    controls.enableDamping = false;
    controls.screenSpacePanning = true;
	//controls.
//    controls.addEventListener('start', () => threeD.unfollowTractor());

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x9ED2FA);

	directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	scene.add(directionalLight);

	let groundGeometry = new THREE.PlaneGeometry(gridSize, gridSize, 1, 1);
	let groundMaterial = new THREE.MeshBasicMaterial({color: 0x80A15B});
	groundPlane = new THREE.Mesh(groundGeometry, groundMaterial);
	scene.add(groundPlane);
	
	grid = new THREE.GridHelper(gridSize, gridResolution, 0xDDDDDD, 0xDDDDDD);
	grid.rotateX(Math.PI / 2);
//	grid.translateZ(10.1);
	scene.add(grid);

	let tractorGeometry = new THREE.BoxGeometry(0.1, 1, 0.1);
	tractorGeometry.rotateY(Math.PI / 2);
	tractorGeometry.translate(0, 0, 0.05);
	let tractorMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
	tractor = new THREE.Mesh(tractorGeometry, tractorMaterial);
	scene.add(tractor);
	tractorVelocity = 0.001;
	
	let treeGeometry = new THREE.ConeGeometry(0.2, 1, 20);
	treeGeometry.rotateX(Math.PI / 2);
	treeGeometry.translate(0, 0, 0.5);
	let treeMaterial = new THREE.MeshToonMaterial({color: 0x20ff20});
	for (let j = 0; j < 10; j++) {
		for(let i = 0; i < 100; i++) {
			const tree = new THREE.Mesh(treeGeometry, treeMaterial);
			tree.position.y = -9 + i * 2;
			tree.position.x = -9 + j * 2;
	//		tree.scale.set(1, 1, 0.01);
			trees.push(tree);
			scene.add(tree);
		}
	}
	
	let droneGeometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
	let droneMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
	drone = new THREE.Mesh(droneGeometry, droneMaterial);
	scene.add(drone);
}

function initMap() {
	useGeographic();

	mapView = new View({
		center: [0, 0],
		zoom: 1
	});
	
	map = new Map({
		target: 'mapCanvas',
		layers: [
			new TileLayer({
				source: new OSM()
			})
		],
		view: mapView
	});
	map.on('postrender', mapOnPostRender);
	
	mapView.setCenter([16.94529940000001, 46.685864200000026]);
	mapView.setZoom(22);

	mapGeometry = new THREE.PlaneGeometry(100, 100);
	mapGeometry.translate(0, 0, 0.001);
}

// ---------------------------------------------------------------  render  --

function render() {
	stats.begin();

	renderUpdateTractor();
	renderUpdateGround();

	let v = new THREE.Vector3(
		Math.cos(Math.PI / 180 * time) * 0.1,
		Math.sin(Math.PI / 180 * time * 3) * 0.1, 
		0.2);
	v.add(tractor.position);
	drone.position.copy(v);

	renderUpdateCamera();

	directionalLight.position.copy(camera.position);
	//directionalLight.quaternion.copy(camera.quaternion);

	renderer.render(scene, camera);
//	composer.render();
	
	stats.end();
//	stats.update();

	time++;
	requestAnimationFrame(render);
}

function renderUpdateTractor() {
	tractor.rotation.z -= 0.005;
	const direction = new THREE.Vector3(0, 0.01, 0);
	direction.applyEuler(tractor.rotation);
	tractor.position.addScaledVector(direction, 1);
}

function renderUpdateGround() {
	if (hudGroundMap.checked) {
		mapPlane.visible = true;
//		groundPlane.visible = false;
		grid.visible = false;
	} else if (hudGroundGrid.checked) {
		if (mapPlane != null) {
			mapPlane.visible = false;
		}
//		groundPlane.visible = true;
		grid.visible = true;
	}

	groundPlane.position.set(
		tractor.position.x,
		tractor.position.y,
		0.0);

	grid.position.set(
		tractor.position.x - tractor.position.x % (gridSize / gridResolution),
		tractor.position.y - tractor.position.y % (gridSize / gridResolution),
		0.001);
/*
	if (mapPlane != null) {
		mapPlane.position.set(
			tractor.position.x,
			tractor.position.y,
			0.0);
	}*/
}

function renderUpdateCamera() {
	if (hudModeFollow.checked) {
		controls.enabled = false;

//		hudViewpointTop.disabled = false;
//		hudViewpointBack.disabled = false;

		if (hudViewpointTop.checked) {
			viewTargetPositionDelta.set(0, 0, 15);
			if (hudHeadingFront.checked)
				viewTargetPositionDelta.applyEuler(tractor.rotation);
			viewCurrentPositionDelta.lerp(viewTargetPositionDelta, viewLerpRatio);

			viewTargetUp.set(0, 1, 0);
			if (hudHeadingFront.checked)
				viewTargetUp.applyEuler(tractor.rotation);
			viewCurrentUp.lerp(viewTargetUp, viewLerpRatio);
		} else if (hudViewpointBack.checked) {
			viewTargetPositionDelta.set(0, -2, 0.8);
			if (hudHeadingFront.checked)
				viewTargetPositionDelta.applyEuler(tractor.rotation);
			viewCurrentPositionDelta.lerp(viewTargetPositionDelta, viewLerpRatio);

			viewTargetUp.set(0, 0, 1);
			viewCurrentUp.lerp(viewTargetUp, viewLerpRatio);
		}

		camera.up.copy(viewCurrentUp);
		//camera.quaternion.slerp(viewQuaternion, 0.03);
		camera.position.copy(tractor.position);
		camera.position.add(viewCurrentPositionDelta);
	//		camera.position.addScaledVector(viewPositionDelta, viewTransition);
		camera.lookAt(tractor.position);
	} else if (hudModeFree.checked) {
		controls.enabled = true;

		camera.up.set(0, 0, 1);

//		hudViewpointTop.disabled = true;
//		hudViewpointBack.disabled = true;
		controls.update();
	}
}

init();
render();