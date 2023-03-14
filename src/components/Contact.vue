<template>

    <section>

        <form onsubmit="return sendSubmitButton()">
            <div>

                <div>
                    <label for="inp:name">Name</label>
                    <input label="inp:name" type="text" placeholder="Namen eingeben">
                </div>
                <div>
                    <label for="inp:email">E-Mail-Adresse</label>
                    <input label="inp:email" type="text" placeholder="E-Mail-Adresse eingeben">
                </div>
                <div>
                    <label for="inp:telnummer">Telefonnummer</label>
                    <input label="inp:telnummer" type="text" placeholder="Telefonnummer eingeben">
                </div>
                <div id="message">
                    <label for="inp:message">Nachricht</label>
                    <input label="inp:message" type="text" placeholder="Nachricht eingeben">
                </div>
            </div>

            <div id="submit">
                <div><input type="submit" value="Senden"> </div>
            </div>

        </form>

    </section>
    
</template>


<script>

export default { 


    data() {

    },
    methods: {

        sendSubmitButton(event) {

            alert('Form submitted' + event.target.name)
            return true;

        }

    }


}

</script>


<style scoped> 
@import "../assets/fonts/fonts.css";

section {


    font-family: "Frutiger_65_Bold";
    font-size: 1.3em;
    background-color: rgb(209, 209, 209);
    color: black;
    padding: 30px; 
    
    /* Flexbox */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;

   
}



section div div {
    
    display: grid;
    grid-template: "txt inp"
                    "btn btn";



}





section div div label {

    width: 200px;
    grid-area: txt;
    margin-right: 10%;
    margin-top: 5%;
    padding-bottom: 15%;

    text-align: left;
    

}

section div div input {

    grid-area: inp;
    height: 40px;
    width: 800px;
    border: none;

}


section div #message input {

    grid-area: inp;
    height: 120px;
    width: 800px;
    border: none;

}

section #submit {
    padding: 30px;
    grid-area: btn;
    
    
}

section #submit input {
    
    font-family: "Frutiger_65_Bold";
    font-size: 1em;
    background-color:rgb(239, 114, 2);
    color: white;
    width: 150px;

    
}

section #submit input:active {
    
    
    background-color: white;
    color: rgb(239, 114, 2);
    

    
}


</style>
