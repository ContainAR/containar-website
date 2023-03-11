<template>

    <section>

        <div>
            <div>
                <p>Name</p>
                <input type="text">
            </div>
            <div><p>E-Mail-Adresse</p></div>
            <div><p>Telefonnummer</p></div>
            <div><p>Ihre Anfrage</p></div>
        </div>

        <div>
            <div><input type="submit"> </div>
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


    font-family: "Frutiger_65_Bold";
    font-size: 1.3em;
    background-color: gray;
    color: white;
    padding: 10px; 
    
    /* Flexbox */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;

   
}


section div div {
    display: flex;
    flex-direction: row;
    color: white;

}


</style>
