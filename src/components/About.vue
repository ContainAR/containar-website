<template>
 
    <section>

        <div class="Functions">
            <router-link to="/"><p>Über ContainAR</p></router-link>
            <p>Funktionen</p>
            <p>Kontakt</p>
        </div>

         <div class="Cooperation">
            <p>Über KURZ</p>
            <a href="https://kurzgruppe.de/"><p>Die KURZ Gruppe</p></a>
            <a href="https://shop.kurz-entsorgung.de/"><p>Onlineshop</p></a>
        </div>

        <div class="Privacy">
            <router-link to="/imprint"><p>Impressum</p></router-link>
            <router-link to="/privacypolicy"><p>Datenschutzerklärung</p></router-link>
            
        </div>

        <div class="Social">
            <a href="https://www.facebook.com/ContainAR"><p>Facebook</p></a>
            <a href="https://www.instagram.com/containar.app/"><p>Instagram</p></a>
        </div>

        <div class="Store">

            <a href="https://apps.apple.com/de/app/containar/id1503508901"><p><img src="../assets/Apple_App_Store.svg" /></p></a>
            <p></p>
        </div>

    </section>

</template>


<script>
export default {

}

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

section div a {
    text-decoration: none;
    color: white;
    
}

@media screen and (max-width:500px) {

    section {

        display: grid;
        grid-template-areas: "Functions"
                            "Corporation"
                            "Privacy"
                            "Social"
                            "Store";
    }

    section div {

        display: flex;
        align-items: center;
    }


}

.Functions {

    
    margin-left: 9px;
}

section div {
    display: flex;
    flex-direction: column;
    text-align: left;
}


</style>