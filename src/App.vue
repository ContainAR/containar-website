<template>
 <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
    <div id="banner">
    <div>
        <router-link to="/"><div id="icon"><img src="./assets/Icon180.png"> </div></router-link>
        <router-link to="/"><div>Über die App</div></router-link>
        <router-link to="/Workflow"><div>Funktionsweise</div></router-link>
        <div>Kontakt</div>
        <div>KURZ Gruppe</div>
    </div>
    <img src="./assets/banner.png">
    </div>

  <main><router-view></router-view></main>

  <About></About>
  
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Banner from './components/Banner.vue'

import About from './components/About.vue'

export default {
  name: 'App',
  components: {
 
      About
     
    }
}
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

@import "./assets/fonts/fonts.css";

#banner {

    font-family: "Frutiger_65_Bold";
}

#banner div div {
    color: black;
    display: inline-block;
    padding: 2%;

 
}
#icon {
    width: 7%;
}

#banner img {
    max-width: 99%;
}

/*  ToDo: Highlighting */
.router-link-active {



  

}
</style>
