<template>

<div id="content_container">

<h2>Die ContainAR App in einem Video erklärt</h2>

<div id="video_div">


<video src="../assets/containar_video.mp4"  controls poster="../assets/car_video_posterbild.png">
Dies Video kann in Ihrem Browser nicht wiedergegeben werden.<br>
Eine Download-Version steht unter <a href="https://containar.app/media/containar_video.b01d6b90.mp4">diesem Link</a> zum Abruf bereit. 
</video>

</div>

</div>

    
</template>


<script>
export default {
    name: "Video",
    data() {
        return {};

    }
    
}
</script>

<style scoped>
@import "../assets/fonts/fonts.css";


#content_container {
    padding-top: 2em;
    padding-bottom: 4em;
    background: white;
}


#video_div video {

    width: 25%;
    
}


#content_container h2 {
    font-family: "Frutiger_65_Bold";
    color: rgb(239, 114, 2);
}

@media screen and (max-width: 1300px) {

    #video_div video {

        width: 90%;
        

    }

}

@media screen and (max-width: 800px) {

    #video_div video {

        width: 90%;

    }

}

</style>