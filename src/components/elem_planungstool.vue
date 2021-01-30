<template>
<div id="content_container">
    <section class="wrapper" id="wrapper">
    
        <div class="left">
            <h4>Woher weiß ich, ob der Container passt?</h4>
            <h3>Ihr verlässliches Planungstool</h3>
            <p>Unsere App ContainAR beruht auf der Augmented-Reality-
            Technologie, zu Deutsch „erweiterte Realität“.
            Dabei werden Bilder oder Videos durch zusätzliche
            computergestützte Informationen, in unserem Fall virtuelle
            Container in Originalgröße, ergänzt. Mithilfe der im
            Smartphone integrierten Kamera können Sie den
            ausgewählten Container inmitten der realen Szene abbilden.
            Durch die typische Gestensteuerung ist es möglich, das
            Modell zu verschieben, zu drehen und an der gewünschten
            Stelle abzusetzen (z.B. in Ihrer Einfahrt). So überprüfen Sie,
            ob sich der Container in Höhe, Breite und Tiefe eignet.</p>
             
        </div>

        <div class="right">
           <img src="../assets/img_planungstool.png"/>
        </div>
        
    </section>
    </div>

</template>

<script>
export default {
    name: 'Elem_Planungstool'
    
}
</script>

<style scoped>

@import "../assets/fonts/fonts.css";

#content_container {
    background-color: rgb(218, 218, 218) !important
}

/* Container Klasse */
.wrapper {

    display: grid;
    grid-template-areas: "text picture";


}

@media screen and (max-width:500px) {


.wrapper {

    display: grid;
    grid-template-areas: "text"
                        "picture";
}

}

.wrapper div {
  
  
    background-color: rgb(218, 218, 218) 

}


.left {
    
    grid-area: text;

    display: flex;
    flex-direction: column;
    justify-content: center;
     align-items: center;

    
    
}

.right {
    grid-area: picture;

       display: flex;
    flex-direction: column;
    justify-content: center;
     align-items: center;
}

/*
.wrapper > .left {
    float: left;
    width: 49.999999999%;
    height: 40%;
}

.wrapper > .right {
    float: right;
    width: 49.999999999%;
    height: 40%;
    
}
*/
img {
    width: 80%;
}

h3 {
    font-family: "Frutiger_65_Bold";
    color: rgb(239, 114, 2)
    
}

h4 {
    font-family: "Frutiger_55_Roman";
    color: black;
}

p {
    font-family: "Frutiger_55_Roman";
    font-size: 1.0em;;
    color: black;
}

section {
    
}

</style>