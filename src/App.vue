<template>
  <!--  Search Console of Google -->
  <meta name="google-site-verification" content="h5qMz_eEUa2mYQa9LYN6OdN_-a-hfIxTf-BoanlIw6M" />
  <meta name="apple-itunes-app" content="app-id=id1503508901, app-argument=https://apps.apple.com/us/app/containar/id1503508901">
  
  
  <!-- <div id="orange-bar"> </div> -->

  

  <div id="sorounding">

  
    <div id="content">

      <div id="banner">
        
          <div>
          
            <router-link to="/">
                <div id="icon"><img src="./assets/Icon180.png" /></div>
            </router-link>
            <router-link to="/"><div>Über die App</div></router-link>
            <a href="#WF" v-scroll-to="'#Workflow'"><div>Funktionsweise</div></a>
            <!--  <div>Kontakt</div> -->
            <a href="https://www.kurzgruppe.de/" target="_blank"><div>KURZ Gruppe</div></a>
          </div>
          
          <img id="banner_image" src="./assets/banner.png" />

      </div>

      <main>
        <router-view></router-view>
      </main>

      <About></About>
      
  </div>

</div>


</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Banner from './components/Banner.vue'

import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    About,
  },
};
</script>

<style scope>

@import "./assets/fonts/fonts.css";

#sorounding {

  background-color: rgb(239, 114, 2);
  margin: 0;
  align-content: center;
  justify-content: center;

}

#content {
  
  padding-top: 2%;
  padding-right: 5%;
  padding-left: 5%;
  width: 90%
}

#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#orange-bar {

  
  height: 30px;
  background-color: rgb(239, 114, 2);;

}


#banner {

  border-radius: 50px 50px 0px 0px;
  font-family: "Frutiger_65_Bold", sans-serif;
  background: white;
  

}


/* Elemente am oberen Ende der Landing Page */
#banner div div {
  color: black;
  display: inline-block;
  padding: 2%;
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: bold;
}

/* App Logo */
#icon {
  width: 7%;
}

#banner_image {

  width: 100%;
}

/* Dieses div ist noch zu klären */
#banner img {
  max-width: 100%; 
}


#banner div a div:hover {
  color: rgb(239, 114, 2);
  
  /* Horitzontal und vertikale Verschiebung des Schattens */
  text-shadow: 0.1px 0.1px  gray;
}

/*  
    ToDo: Highlighting
    Nochmal prüfen mit Vue.js

 */
#banner div a[href="#/"] {

}

@media screen and (max-width: 1100px) {
  
  #content {
    
    padding-top: 5%;

  }


}

@media screen and (max-width: 800px) {

  #content {
    
    padding-top: 5%;

  }

}


</style>
