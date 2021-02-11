<template>
  <div id="content_container">
    <section class="wrapper" id="wrapper">
      <div class="text">
        <h4>{{ teaser }}</h4>
        <h3>{{ headline }}</h3>
        <p>{{ text }}</p>
        <p></p>
      </div>

      <div class="image">
        <img v-bind:src="getImgUrl(link_image)" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Elem_Planungstool",
  data() {
    return {};
  },
  props: ["teaser", "headline", "text", "link_image"],
  methods: {
    getImgUrl(img_name) {
      var images = require.context("../../assets/", true, /\.png$/);
      return images("./" + img_name + ".png");
    },
  },
};
</script>

<style scoped>
@import "../../assets/fonts/fonts.css";

#content_container {
  background-color: rgb(218, 218, 218);
}

/* Container Klasse */
.wrapper {
  display: grid;
  grid-template-areas: "text picture";
}

p {
  font-family: "Frutiger_65_Bold";
  font-size: 0.8em;
  color: black;
  text-align: left;
}



.wrapper div {
  background-color: rgb(218, 218, 218);
}

/* Textbereich */
.text {
  margin-left: 10%;
  margin-right: 10%;
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



/* Bildbereich */
.image {
  grid-area: picture;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 65%;
}

h3 {
  margin: 0;
  margin-top: 2%;
  font-family: "Frutiger_65_Bold";
  color: rgb(239, 114, 2);
}

h4 {
   padding-top: 5%;
  font-family: "Frutiger_65_Bold";
  color: black;
}

section {
}


@media screen and (max-width: 500px) {
  
  .wrapper {
    display: grid;
    grid-template-areas:
      "text"
      "picture";
  }

    h4 {

      text-align: center;
  }

  h3 {
      padding-top: 3%;
  }
}


@media screen and (min-width: 1250px) {
  .text h4 {
    font-size: 1.8em;
  }

  .text h3 {
    font-size: 2em;
  }

  .text p {
    font-size: 1.8em;
  }
}
</style>