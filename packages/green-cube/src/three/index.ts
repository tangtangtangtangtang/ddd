/*
 * @Author: xiaozhuo
 * @Date: 2021-10-08 21:04:30
 * @LastEditTime: 2021-11-15 15:17:19
 * @LastEditors: xiaozhuo
 * @Description: 
 * Enuma Elish
 */
import THREE from 'three.js'
import basic from './basicExtends'
import basicImplements from './basicImplements'

class GreenCube extends basic implements basicImplements {
  ambientLight: undefined | THREE.AmbientLight
  cube: undefined | THREE.Mesh

  constructor() {
    super()
    this.init()
  }

  init() {
    //第一步新建一个场景
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    // this.setLight();
    this.cube = cube
    this.scene.add(cube)
  }

  // 新建透视相机
  setCamera() {
    this.camera.position.z = 5
  }

  // 设置渲染器
  setRenderer() {
    // 设置画布的大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    //这里 其实就是canvas 画布  renderer.domElement
    document.body.appendChild(this.renderer.domElement)
  }

  // 设置环境光
  setLight() {
    this.ambientLight = new THREE.AmbientLight(0xffffff) // 环境光
    this.scene.add(this.ambientLight)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))
    if (!this.cube) return
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.render()
  }
}

export default GreenCube