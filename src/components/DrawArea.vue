<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import * as THREE from 'three'
  
  export default defineComponent({
    name: 'DrawArea',
    mounted() {
      // Set up scene
      const scene = new THREE.Scene()
  
      // Set up camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5
  
      // Set up renderer
      const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas })
      renderer.setSize(window.innerWidth, window.innerHeight)
  
      // Add box to scene
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const box = new THREE.Mesh(geometry, material)
      scene.add(box)
  
      // Render scene
      const animate = () => {
        requestAnimationFrame(animate)
        box.rotation.x += 0.01
        box.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
    },
  })
  </script>
  