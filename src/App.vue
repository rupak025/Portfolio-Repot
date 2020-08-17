<template>
  <div id="app">
    <Return/>
    <Risklvl/>
    <Loan/>
    <CatPerf/>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Return from './components/Return'
import Risklvl from './components/Risklvl'
import Loan from './components/Loan'
import CatPerf from './components/CatPerf'
export default {
  name: 'App',
  components: {
    Return,
    Risklvl,
    Loan,
    CatPerf
  
  }
}
</script>

<style>


</style>
