<template>
  <DrawArea />
  <ThreeJS />
</template>

<script>
import DrawArea from './components/DrawArea.vue'
import ThreeJS from './components/ThreeJS.vue'

export default {
  name: 'App',
  components: {
    DrawArea,
    ThreeJS
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
