import * as THREE from "three";
//　three.jsの処理を書いていく
export default class earth{
    constructor(props){
        this.props = props;
        this.init();
    }
    const W_WIDTH  = window.innerWidth; // ブラウザの横サイズ
const W_HEIGHT = window.innerHeight;// ブラウザの縦サイズ
const W_ASPECT = window.innerWidth / window.innerHeight;// アスペクト比
const W_RATIO  = window.devicePixelRatio;// ドット比
let camera, scene, renderer, earth;// カメラ、シーン、レンダラー、地球

window.onload = ()=>{
	// カメラを作る
	camera = new THREE.PerspectiveCamera(50, W_ASPECT, 1, 1000);
	camera.position.set(0, 0, 600);
	// シーンを作る
	scene = new THREE.Scene();
	// ライトを作る1
	let dirLight = new THREE.DirectionalLight(0xffffff, 1);
	dirLight.position.set(5,3,5);// 光の向き
	scene.add(dirLight);
	// ライトを作る2
	let ambLight = new THREE.AmbientLight(0x333333);
	scene.add(ambLight);
	// レンダラーを作る
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setPixelRatio(W_RATIO);// ピクセル比
	renderer.setSize(W_WIDTH, W_HEIGHT);
	// HTMLに配置する
	let div = document.getElementById("three");
	div.appendChild(renderer.domElement);
	// 地球を配置する
	// 1, テクスチャ
	let txLoader        = new THREE.TextureLoader();
	let normalMap       = txLoader.load("/assets/img/earth_tx.png");
	// 2, ジオメトリ
	let geometry = new THREE.SphereBufferGeometry(100, 30, 30);
	// 3, マテリアル
	let material = new THREE.MeshPhongMaterial({
		color:0xffffff,
		map: normalMap
	});
	// 4, メッシュ
	earth = new THREE.Mesh(geometry, material);
	scene.add(earth);
	// アニメーションの開始
	animate();
}

    function animate(){
        earth.rotation.y += 0.002;// 5, 地球を回転させる
        renderer.render(scene, camera);// レンダリング
        requestAnimationFrame(animate);// 更新
    }
}