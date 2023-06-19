<template>
  <div id="content_container">
    <section class="wrapper" id="wrapper">
      <div class="text">
        <h4>{{ teaser }}</h4>
        <h3>{{ headline }}</h3>

        <p v-html="text"></p>
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
      //return require('../assets/'+img_name);
    },
  },
};
</script>

<style scoped>
@import "../../assets/fonts/fonts.css";

#content_container {
  background-color: white;
}

/* Container Klasse */
.wrapper {
  display: grid;
  grid-template-areas: "picture text";
  width: 90%;
  margin: auto;
}

p {
  font-family: "Frutiger_65_Bold";
  font-size: 20px;
  color: black;
  text-align: left;
}

.wrapper div {
  /* weißer Hintergrund */
  background-color: white;
}

/* Textbereich */
.text {
  margin-right: 10%;
  margin-left: 10%;

  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
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
  margin-top: 0%;
  font-size: 1.8em;
  font-family: "Frutiger_65_Bold";
  color: rgb(239, 114, 2);
}

h4 {
  padding-top: 0%;
  font-size: 20px;
  font-family: "Frutiger_65_Bold";
  color: black;
}

@media screen and (max-width: 1300px) {
  .wrapper {
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  .wrapper {
    width: 100%;
    display: grid;
    grid-template-areas:
      "text"
      "picture";
  }

  p {
    font-size: 1em;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  h3 {
    text-align: center;
    padding-top: 3%;
  }
}
</style>