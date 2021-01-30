<template>




    <section>

    <p class="teaser_workflow">So einfach funktioniert's:</p>

        <div class="steps">
            <div class="element">

                <div class="wuerfel">
                    <p class="number">1</p>
                </div>

                <p class="descr">
                
                Bestellen Sie einen Container
                Ihrer Wahl in unserem Shop.
                Sind Sie sich unsicher, wie
                groß der Container ist bzw.
                ob er an die gewünschte Stelle
                passt? Dann prüfen Sie das
                schnell und einfach ohne
                lästiges Messen mit unserer
                App ContainAR.
                </p>
            </div>
            <div class="element">
                <div class="wuerfel">
                    <p class="number">2</p>
                </div>
                <p class="descr">
                Wählen Sie dafür den
                bestellten Container aus und
                platzieren ihn nach Ihren
                Vorstellungen. Fotografieren
                Sie den virtuellen Entsorgungscontainer
                von allen vier Seiten.
                Beachten Sie, dass sowohl der
                Container als auch der
                Standort klar erkennbar sein
                sollte.
                </p>
            </div>
            <div class="element">
                <div class="wuerfel">
                    <p class="number">3</p>
                </div>
                <p class="descr">
                Senden Sie die Bilder automatisch
                per E-Mail an uns. Bitte
                fügen Sie der E-Mail Ihre
                Bestell- oder Kundennummer
                bei, damit wir die Bilder
                korrekt zuordnen können.
                </p>
        </div>
        </div>

    </section>
    
</template>

<script>
export default {

    name: 'Workflow'
}
</script>


<style scoped>

@import "../assets/fonts/fonts.css";


section {
      background-color: rgb(218, 218, 218) 

      
}

/* Überschrift: So einfach funktionierts */
section p {
    
    align: left;
    color: rgb(239, 114, 2);
    font-family: "Frutiger_65_Bold";
    font-size: 1.1em;
    padding-top: 2%;
} 

.teaser_workflow {
    font-size: 1.2em;
}

.steps {
    
    padding: 1%;
    width: 100%;
    text-align: center;
    display: flex;
    /* display: inline-flex; */
}

@media screen and (max-width:750px) {


    .steps  {
        display: flex;
        flex-direction: column;

    }

     .steps div { 

        height: 200px;
        width: 300px;
    }

}

/* Die drei Schritte */
.steps div {
    
 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    

    align-self: center;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 2%;

    height: 350px;
    width: 500px;


    align-content: center;
    background-color: white;
    

}

 .steps .element {

    padding-top: 4%;
}

@media screen and (min-width:1250px) { 

    .teaser_workflow {

        font-size: 2em;

    }


}


@media screen and (max-width:500px) {


    .steps div { 

        height: 300px;
        width: 300px;
    }


}

/* Orangener Würfel */
.steps div div { 

    justify-content: center;
    align-content: center; 
    background-color: rgb(239, 114, 2);
    width: 30px;
    height: 30px;
    transform: rotate(20deg);
    color: white;
    font-size: 1.5em;
    


}

/* Text für die Zahlen */
.steps div div .number {
    
    color: white;
    font-family: "Frutiger_65_Bold";
    transform: rotate(-20deg);
}

/* Text für die Inhalt */
.steps div .descr {
    padding: 3%;
    color: black;
    font-family: "Frutiger_55_Roman";
    
}



</style>