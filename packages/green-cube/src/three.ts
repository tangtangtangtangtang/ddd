// @ts-nocheck
/*
 * @Author: xiaozhuo
 * @Date: 2021-10-08 21:04:30
 * @LastEditTime: 2021-10-12 15:01:22
 * @LastEditors: xiaozhuo
 * @Description: 
 * Enuma Elish
 */
import THREE from 'three.js'

class chinaMap {
    constructor() {
      this.init()
    }

    init() {
      //第一步新建一个场景
      this.scene = new THREE.Scene()
      this.setCamera()
      this.setRenderer()
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      this.cube = cube
      this.scene.add(cube)
      this.render()
    }
    
    //render 方法 
    render() {
      this.renderer.render(this.scene, this.camera)
    }
      
    // 新建透视相机
    setCamera() {
      // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.position.z = 5
    }

    // 设置渲染器
    setRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      // 设置画布的大小
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      //这里 其实就是canvas 画布  renderer.domElement
      document.body.appendChild(this.renderer.domElement)
    }
    
    // 设置环境光
    setLight() {
      this.ambientLight = new THREE.AmbientLight(0xffffff) // 环境光
      this.scene.add(ambientLight)
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.render()
    }
      
    // 加载地图数据
    // loadMapData() {
    //     const loader = new THREE.FileLoader()
    //     loader.load('../json/china.json', (data) => {
    //         const jsondata = JSON.parse(JSON.stringify(data))
    //     })
    // }

}

export default chinaMap 