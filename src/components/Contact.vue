<template>

    <section>

        <form @submit.prevent="sendSubmitButton" id="formular" v-if="notSended">
            <div>

                <div>
                    <label for="inp:name">Name</label>
                    <input  v-model="form.personName" label="inp:name" type="text" placeholder="Namen eingeben">
                </div>
                <div>
                    <label for="inp:email">E-Mail-Adresse</label>
                    <input v-model="form.email" label="inp:email" type="email" placeholder="E-Mail-Adresse eingeben">
                </div>
                <div>
                    <label for="inp:phone">Telefonnummer</label>
                    <input v-model="form.phone" label="inp:phone" type="tel" placeholder="Telefonnummer eingeben">
                </div>
                <div id="message">
                    <label for="inp:inquiry">Nachricht</label>
                    <input v-model="form.inquiry" label="inp:inquiry" type="text" placeholder="Nachricht eingeben">
                </div>
            </div>

            <div id="submit">
                <div><input type="submit" value="Senden"> </div>
            </div>

        </form>

        <div v-if="sendSuccessful">
            <p>Vielen Dank für Ihre Anfrage. Wir melden uns in kürze bei Ihnen.</p>
        </div>

        <div v-if="sendFailed">
            <p>Es gibt ein Problem bei der Übermittlung des Formulares. Bitte schreiben Sie eine E-Mail an benedikt.kurz@kurz-entsorgung.dex.</p>
        </div>

    </section>
    
</template>


<script>
import axios from 'axios'

export default { 


    data() {
        return {
            
            sendSuccessful: false,
            sendFailed: false,
            notSended: true,
            form: {
                email: '',
                username: '',
                phone: '',
                inquiry: '',
                personName: ''
            }
        }

    },
    methods: {

        sendSubmitButton() {

            console.log(JSON.stringify( this.form ))


            let data = JSON.stringify({
            "form": {
                "subject": this.form.username,
                "email": this.form.email,
                "inquiry": this.form.inquiry,
                "phone": this.form.phone,
                "personName": this.form.personName
            }
            });

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kurz-containar.de:80/form/new',
            headers: { 
                'Content-Type': 'application/json', 
                'api_key': '165846816356876787631'
            },
            data : data
            };

            axios.request(config)
            .then((response) => {
            
                console.log(JSON.stringify(response.data));
                this.sendSuccessful = true;
                this.notSended = false;

            })
            .catch((error) => {

                console.log(error);
                this.sendFailed = true;

            });
        }
    }


}

</script>


<style scoped> 
@import "../assets/fonts/fonts.css";

section {

    border-radius: 0px 0px 50px 50px;
    font-family: "Frutiger_65_Bold";
    font-size: 1.3em;
    background-color: white; 
    /* Former Color:      rgb(209, 209, 209); */
    color: black;
    padding: 30px; 
    
    /* Flexbox */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;

   
}

#send-success {

    visibility: false;

}

section div div {
    
    display: grid;
    border-color: white;
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
    

}


section div div input::placeholder {

    font-size: 1.3em;

}

section div #message input {

    grid-area: inp;
    height: 120px;
    width: 800px;
    

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
    border-color: rgb(239, 114, 2);

    
}

section #submit input:active {
    
    background-color: white;
    color: rgb(239, 114, 2);
    
    
}


@media screen and (max-width: 1300px) {


    section div div input {

        width: 500px;
            
    }


    section div #message input {

        width: 500px;
            
    }


}



@media screen and (max-width: 800px) {


    section div div input {

        width: 250px;
            
    }


    section div #message input {

        width: 250px;
            
    }

    section div div {
    
        display: grid;
        border-color: white;
        grid-template: "txt txt"
                        "inp inp"
                        "btn btn";
    
    
    }

    form div div label {
        padding: 4px;
    }



}


</style>
