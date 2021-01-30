<template>
 <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
  <Banner></Banner>
  
  <Elem_Planungstool></Elem_Planungstool>
  <Workflow></Workflow>
  <About></About>
  
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'
import Elem_Planungstool from './components/elem_planungstool.vue'
import Workflow from './components/Workflow.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
      Banner,
      Elem_Planungstool,
      Workflow,
      About
     
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

}
</style>
