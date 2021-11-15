/*
 * @Author: xiaozhuo
 * @Date: 2021-11-15 15:07:52
 * @LastEditTime: 2021-11-15 16:56:48
 * @LastEditors: xiaozhuo
 * @Description: 
 * Enuma Elish
 */
import * as THREE from 'three'

class Basic {
    scene: THREE.Scene
    renderer: THREE.Renderer
    camera: THREE.PerspectiveCamera

    constructor() {
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
        // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
    }

    //render 方法 
    render() {
        this.renderer.render(this.scene, this.camera)
    }

    // 新建透视相机
    setCamera() { }

    // 设置渲染器
    setRenderer() {
        // 设置画布的大小
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        //这里 其实就是canvas 画布  renderer.domElement
        document.body.appendChild(this.renderer.domElement)
    }
}

export default Basic