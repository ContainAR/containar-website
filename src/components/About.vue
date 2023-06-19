<template>
  <section>

    <div class="Functions">
      <router-link to="/"><p>Über ContainAR</p></router-link>
      <router-link to="/workflow"><p>Funktionsweise</p></router-link>
      
      <a href="FlyerApp.pdf"><p>Flyer</p></a>
      <!-- <router-link to="/workflow"><p>Kontakt</p></router-link> -->
      <!-- <p>Kontakt</p> -->
    </div>

    <div class="Cooperation">
      <router-link to="/kurz"><p>Über KURZ</p></router-link>
      <a target="_blank" href="https://kurzgruppe.de/"><p>Die KURZ Gruppe</p></a>
      <a href="https://shop.kurz-entsorgung.de/"><p>Onlineshop</p></a>
    </div>

    <div class="Privacy">
      <router-link to="/imprint"><p>Impressum</p></router-link>
      <router-link to="/privacypolicy"><p>Datenschutzerklärung</p></router-link>
    </div>

    <div class="Social">
      <a href="https://www.facebook.com/ContainAR">
        <div>
          <img  src="../assets/facebook_white.png" height="30" />
          <span>ContainAR auf Facebook</span>
        </div>
        </a>
      
      <a href="https://www.instagram.com/containar.app/">
        <div>
          <img src="../assets/instagram_white.png" height="30" />
          <span>ContainAR bei Instagram</span>
        </div>
      </a>
    </div>

    <div class="Store">
      <a href="https://apps.apple.com/de/app/containar/id1503508901">
        <p>
          <img src="../assets/Apple_App_Store.svg" />
        </p>
      </a>
    </div>

  </section>
</template>


<script>
export default {};
</script>


<style scoped>
@import "../assets/fonts/fonts.css";

section {
  padding: 5px;
  background-color: rgb(239, 114, 2);
  color: white;

  font-family: "Frutiger_65_Bold";


  display: grid;
  grid-template-areas: "Functions Corporation Privacy Social Store";
}

section div {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
}

section div a {
  text-decoration: none;
  color: white;
  font-size: 1.1em;
}

section div a p {
    margin-top: 6px;
    margin-bottom: 6px;
}

section .Store a p img {
  width: 180px;
  
}


section .Social a div {
  
    display: flex;
    flex-direction: row;
    margin: 10px;

}


section .Social a div img {

  width: 30px;
  height: 30px;
  
}


section .Social a div span {

  margin-top: 5px;
  margin-left: 20px;
}




div a p span {
    margin-left: 10px;
    margin-bottom: 25px;
}



.Functions {
  margin-left: 9px;
}


@media screen and (max-width: 1100px) {

  section {
    display: grid;
    grid-template-areas:
      "Functions Corporation"
      "Privacy Social"
      "Store Store";
  }

  .Store {
      text-align: center;
  }

  .Privacy {
      margin-left: 9px;
  }

}


@media screen and (max-width: 700px) {
  section {
    display: grid;
    grid-template-areas:
      "Functions"
      "Corporation"
      "Privacy"
      "Social"
      "Store";
  }

  section div {
    display: flex;
    align-items: center;
  }


section .Social a div span {

  margin-top: 0px;
  
}


section div a {
  text-decoration: none;
  color: white;
  font-size: 1.1em;
}


}
</style>