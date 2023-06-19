<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
  <!--   <Banner></Banner> -->

  <!-- Container Katalog -->

  <Video></Video>
  <info-right
    teaser="Welche Container können ausgewählt werden?"
    headline="Der Container-Katalog"
    text="In ContainAR stehen Ihnen alle gängigen Abfallcontainer als
            virtuelles Modell mit und ohne Deckel zur Verfügung.
            Einen Überblick der auswählbaren Container sowie nähere
            Informationen zum jeweiligen Modell finden Sie im
            Container-Katalog."
    link_image="img_container-catalogue"
  ></info-right>

  <info-left
    teaser="Woher weiß ich, ob der Container passt?"
    headline="Ihr verlässliches Planungstool"
    text="Unsere ContainAR App beruht auf der Augmented-Reality-
            Technologie, zu Deutsch „erweiterte Realität“.
            Dabei werden Bilder oder Videos durch zusätzliche
            computergestützte Informationen, in unserem Fall virtuelle
            Container in Originalgröße, ergänzt. Mithilfe der im
            Smartphone integrierten Kamera können Sie den
            ausgewählten Container inmitten der realen Szene abbilden.
            Durch die typische Gestensteuerung ist es möglich, das
            Modell zu verschieben, zu drehen und an der gewünschten
            Stelle abzusetzen (z. B. in Ihrer Einfahrt). So überprüfen Sie,
            ob sich der Container in Höhe, Breite und Tiefe eignet."
    link_image="img_planungstool"
  ></info-left>

  <info-right
    teaser="Wie kommt Ihr Standortwunsch bei uns an?"
    headline="Die integrierte Schnittstelle"
    text="Durch die Fotofunktion ist es Ihnen möglich, die gewünschte
Platzierung des Containers bildlich festzuhalten.
Fotografieren Sie den Container dafür von allen vier Seiten.
ContainAR ermöglicht es Ihnen, die Bilder im Anschluss per
E-Mail an uns zu versenden. Wir ordnen die Fotos dann Ihrer
Bestellung zu, die Sie vorher in unserem <a style='color: rgb(239, 114, 2); text-decoration: none;  font-weight: bold; ' href='https://shop.kurz-entsorgung.de/'>Onlineshop</a>
abgeschlossen haben. Pluspunkt: Wir geben die Fotos an
unsere Fahrer weiter, sodass diese bei der Anlieferung
genau wissen, wo der Container abgestellt werden soll."
    link_image="img_send-images"
  ></info-right>
  <Workflow></Workflow>
  <Contact></Contact>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import Workflow from "../components/Workflow.vue";
import InfoRight from "../components/LandingPage/InfoRight.vue";
import InfoLeft from "../components/LandingPage/InfoLeft.vue";
import Video from "../components/Video.vue";
// import Contact from "../components/Contact.vue"

export default {
  name: "App",
  components: {
    Workflow,
    InfoRight,
    InfoLeft,
    Video
  },
};
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
