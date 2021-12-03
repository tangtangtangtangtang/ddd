/*
 * @Author: xiaozhuo
 * @Date: 2021-10-08 21:04:30
 * @LastEditTime: 2021-11-15 17:58:30
 * @LastEditors: xiaozhuo
 * @Description: 
 * Enuma Elish
 */
import * as THREE from 'three'
// @ts-ignore
import OrbitControls from 'three-orbit-controls'
import basic from './basicExtends'
import basicImplements from './basicImplements'

const oControls = OrbitControls(THREE)
class GreenCube extends basic implements basicImplements {
  cube: undefined | THREE.Mesh
  container: HTMLElement | null

  constructor(container: string) {
    super()
    this.container = document.querySelector(container)
    this.setCamera()
    this.setRenderer()
    this.init()
  }

  init() {
    //第一步新建一个场景

    this.setScene();
    this.setLight();
    this.setHelper();
    this.setGeometry();
    this.setControls();
    this.render()
  }

  setHelper() {
    const axesHelper = new THREE.AxesHelper(250);
    this.scene.add(axesHelper);
    const gridHelper = new THREE.GridHelper(1000, 30, 0x2C2C2C, 0x888888);
    this.scene.add(gridHelper);
  }

  createBox() {
    const geometry = new THREE.BoxGeometry(10, 10, 10)
    const material = new THREE.MeshPhongMaterial({ color: 0xcecece, specular: 0xffffff, shininess: 1 })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(50, 0, 50)
    return cube
  }

  createOct() {
    const geometry = new THREE.SphereGeometry(12, 8, 8);
    const material = new THREE.MeshPhongMaterial({ color: 0xcecece, specular: 0xffffff, shininess: 1 })

    const cube = new THREE.Mesh(geometry, material)
    return cube
  }

  setGeometry() {
    this.cube = this.createBox()
    this.scene.add(this.cube, this.createOct())
  }

  // 新建透视相机
  setCamera() {
    this.camera.position.z = 100
    this.camera.position.x = 100
    this.camera.position.y = 100
  }

  setScene() {
    this.scene.background = new THREE.Color('black')
  }

  // 设置渲染器
  setRenderer() {
    // 设置画布的大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    //这里 其实就是canvas 画布  renderer.domElement
    if (!this.container) return
    this.container.innerHTML = ''
    this.container.appendChild(this.renderer.domElement)
  }

  // 设置环境光
  setLight() {
    // const light = new THREE.SpotLight(0xffffff, 1) // 环境光
    // light.position.set(0, 100, 0)
    // light.castShadow = true
    // this.scene.add(light)

    // const light2 = new THREE.SpotLight(0xffffff, 1) // 环境光
    // light2.position.set(0, -100, 0)
    // light2.castShadow = true
    // this.scene.add(light2)

    const light3 = new THREE.SpotLight(0xffffff, 0.9) // 环境光
    light3.position.set(100, 100, 100)
    light3.castShadow = true
    this.scene.add(light3)

    const light4 = new THREE.SpotLight(0xffffff, 0.9) // 环境光
    light4.position.set(-100, -100, -100)
    light4.castShadow = true
    this.scene.add(light4)

    // const light2 = new THREE.PointLight(0xffffff, 0.5) // 环境光
    // light2.position.set(-50, -50, -50)
    // light2.castShadow = true
    // this.scene.add(light2)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))
    if (!this.cube) return
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.render()
  }

  setControls() {
    const controls = new oControls(this.camera, this.renderer.domElement)
    controls.addEventListener('change', this.render.bind(this))
  }
}

export default GreenCube