<template>
    <div id="banner">
    <div>
        <div id="icon"><img src="../assets/Icon180.png"> </div>
        <div>Über die App</div>
        <div>Funktionen</div>
        <div>Kontakt</div>
        <div>KURZ Gruppe</div>
    </div>
    <img src="../assets/banner.png">
    </div>

</template>


<script>
export default {
    name: 'Banner'
    
}
</script>

<style scope>

@import "../assets/fonts/fonts.css";

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

</style>