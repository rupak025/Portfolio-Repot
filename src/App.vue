<template>
  <div id="app">
    <Average/>
    <Risklvl/>
    <Purpose/>
    <Performance/>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Average from './components/Average'
import Risklvl from './components/Risklvl'
import Purpose from './components/Purpose'
import Performance from './components/Performance'
export default {
  name: 'App',
  components: {
    Average,
    Risklvl,
    Purpose,
    Performance
  
  }
}
</script>

<style>


</style>
