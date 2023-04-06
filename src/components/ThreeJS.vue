<template>
  <div>
    <canvas ref="canvas"></canvas>
    <button @click="addUnit">Add storage unit</button>
  </div>
</template>

<script>
import { defineComponent, watch, ref, onMounted } from 'vue'
import * as THREE from 'three'
import { useStore } from '../plugins/pinia.js'

export default defineComponent({
  name: 'ThreeJS',
  setup() {
    const store = useStore()
    const storageUnits = store.storageUnits

    const canvas = ref(null)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = ref(null)

    onMounted(() => {
      renderer.value = new THREE.WebGLRenderer({ canvas: canvas.value })
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      const cubes = []
      const animate = () => {
        requestAnimationFrame(animate)
        cubes.forEach((cube) => {
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
        })
        renderer.value.render(scene, camera)
      }
      animate()
    })

    watch(() => storageUnits, (newStorageUnits) => {
      console.log('watch triggered', newStorageUnits)
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.x = (newStorageUnits.length - 1) * 2
      scene.add(cube)
    }, { deep: true })

    storageUnits.forEach((unit) => {
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.x = (unit.id - 1) * 2
      scene.add(cube)
    })

    return {
      store,
      scene,
      camera,
      renderer,
      storageUnits,
      canvas,
    }
  },
  methods: {
    addUnit() {
      const store = useStore()
      store.addStorageUnit({ id: Date.now(), name: `Storage Unit ${store.storageUnits.length + 1}` })
    }
  }
})
</script>
