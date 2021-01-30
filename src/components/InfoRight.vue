<template>
<div id="content_container">
    <section class="wrapper" id="wrapper">
    
        <div class="left">
            <h4> {{ teaser }}</h4>
            <h3> {{ headline }}</h3>
            <p>{{ text }} </p>
             <p></p>
        </div>

        <div class="right">
           <img v-bind:src="link_image" />
        </div>
        
    </section>
    </div>

</template>

<script>
export default {
    name: 'Elem_Planungstool',
    props: ["teaser", "headline", "text", "link_image"],
    methods: {
        getImage() {

            console.log('Link:' + this.link_image);
            return this.link_image;
        }
    }
    
}
</script>

<style scoped>

@import "../assets/fonts/fonts.css";

#content_container {
    background-color: white !important
}

/* Container Klasse */
.wrapper {

    display: grid;
    grid-template-areas: "picture text";


}

@media screen and (max-width:500px) {


.wrapper {

    display: grid;
    grid-template-areas: "text"
                        "picture";
}

}

.wrapper div {
  
  
    background-color: white;

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