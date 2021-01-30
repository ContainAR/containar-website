<template>
 <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
  <Banner></Banner>

  <!-- Container Katalog -->
  <info-right teaser="Welche Container können ausgewählt werden?" headline="Der Container-Katalog" text="In ContainAR stehen Ihnen alle gängigen Abfallcontainer als
            virtuelles Modell mit und ohne Deckel zur Verfügung.
            Einen Überblick der auswählbaren Container sowie nähere
            Informationen zum jeweiligen Modell finden Sie im
            Container-Katalog." link_image="../assets/img_container-catalogue.png"></info-right>
  <Elem_Planungstool></Elem_Planungstool>
  <info-right teaser="Wie kommt Ihr Standortwunsch bei uns an?" headline="Die integrierte Schnittstelle" text="Durch die Fotofunktion ist es Ihnen möglich, die gewünschte
Platzierung des Containers bildlich festzuhalten.
Fotografieren Sie den Container dafür von allen vier Seiten.
ContainAR ermöglicht es Ihnen, die Bilder im Anschluss per
E-Mail an uns zu versenden. Wir ordnen die Fotos dann Ihrer
Bestellung zu, die Sie vorher in unserem Onlineshop
abgeschlossen haben. Pluspunkt: Wir geben die Fotos an
unsere Fahrer weiter, sodass diese bei der Anlieferung
genau wissen, wo der Container abgestellt werden soll." link_image="../assets/img_send-images.png"></info-right>
  <Workflow></Workflow>
  
  <About></About>
  
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'
import Elem_Planungstool from './components/elem_planungstool.vue'
import Workflow from './components/Workflow.vue'
import InfoRight from './components/InfoRight.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
      Banner,
      Elem_Planungstool,
      Workflow,
      InfoRight,
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
