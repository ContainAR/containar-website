<template>
  <section id="Workflow">
    <p class="teaser_workflow">So einfach funktioniert's:</p>

    <div class="steps">
      <div class="element">
        <div class="wuerfel">
          <p class="number">1</p>
        </div>

        <p class="descr">
          Bestellen Sie einen Container Ihrer Wahl in unserem
          <a
            style="
              color: rgb(239, 114, 2);
              text-decoration: none;
              font-weight: bold;
            "
            href="https://shop.kurz-entsorgung.de/"
            >Shop</a
          >. Sind Sie sich unsicher, wie groß der Container ist bzw. ob er an
          die gewünschte Stelle passt? Dann prüfen Sie das schnell und einfach
          ohne lästiges Messen mit unserer ContainAR App.
        </p>
      </div>
      <div class="element">
        <div class="wuerfel">
          <p class="number">2</p>
        </div>
        <p class="descr">
          Wählen Sie den bestellten Container in der App aus und platzieren ihn nach
          Ihren Vorstellungen. Fotografieren Sie den virtuellen
          Entsorgungscontainer von allen vier Seiten. Beachten Sie, dass sowohl
          der Container als auch der Standort klar erkennbar sein sollte.
        </p>
      </div>
      <div class="element">
        <div class="wuerfel">
          <p class="number">3</p>
        </div>
        <p class="descr">
          Senden Sie die Bilder per integrierter Schnittstelle an uns. Bitte fügen Sie
          der E-Mail Ihre Bestell- oder Kundennummer bei, damit wir Ihre Bilder
          korrekt zuordnen können.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Workflow",
};
</script>


<style scoped>
@import "../assets/fonts/fonts.css";



section {
  
  background-color: rgb(218, 218, 218);
  border-radius: 0px 0px 50px 50px;
  
}

/* Überschrift: So einfach funktionierts */
section p {

  align: left;
  color: rgb(239, 114, 2);
  font-family: "Frutiger_65_Bold";
  font-size: 1.1em;
  margin-top: 0%;
  
  padding-top: 2%;
}

.teaser_workflow {
  font-size: 1.7em;
}

.steps {
  padding: 1%;
  width: 100%;
  justify-content: center;
  display: flex;
  margin: auto;

  width: 90%;
  
  /* display: inline-flex; */
}

/* Die drei Schritte */
.steps div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-self: center;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 1%;
  margin-top: 1%;

  height: 350px;
  width: 500px;

  align-content: center;
  background-color: white;
}

.steps .element {
  padding-top: 4%;
}

/* Orangener Würfel */
.steps div div {
  justify-content: center;
  align-content: center;
  background-color: rgb(239, 114, 2);
  width: 40px;
  height: 40px;
  transform: rotate(20deg);
  color: white;
  font-size: 1.8em;
}

/* Text für die Zahlen */
.steps div div .number {
  color: white;
  font-family: "Frutiger_65_Bold";
  transform: rotate(-20deg);
  font-size: 1em;
  padding-top: 60%;
  padding-right: 30%;
}

/* Text für die Inhalt */
.steps div .descr {
  padding: 3%;
  color: black;
  font-family: "Frutiger_65_Bold";
  font-size: 20px;
}


@media screen and (max-width: 1300px) {

  .steps {
    width: 100%;
  }

  /* Überschrift für den Workflow */
  .teaser_workflow {
    font-size: 2em;
  }

  /* Beschreibungstext */
  .steps div .descr {
    font-size: 1.3em;
  }

  /* Text für die Zahlen in den Blöcken*/
  .steps div div .number {
    font-size: 1em;
  }

  /* Text für die Inhalt */
.steps div .descr {

  font-size: 1em;

}
}

@media screen and (max-width: 800px) {
  .steps {
    display: flex;
    flex-direction: column;
    
  }

  .steps div {
    height: 300px;
    width: 300px;
  }

  /* Beschreibungstext */
  .steps div .descr {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 500px) {
  .steps div {
    height: 275px;
    width: 275px;
  }
}
</style>