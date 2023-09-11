<template>


    <section>

        <div id="content_container">

            <h2>Hier könnnen Sie die Android-Version von ContainAR downloaden.</h2>


            <div id="download">
                <a href="app-release-1-4.apk"><p>Download</p></a>
            </div>
        

        </div>

    </section>
        
    </template>
    
    
    <script>
    export default {
        name: "Android",
        data() {
            return {};
    
        }
        
    }
    </script>
    
    <style scoped>
    @import "../assets/fonts/fonts.css";
    

    section {

        font-family: "Frutiger_65_Bold";
        
        text-align: center;
        justify-content: center;
        align-content: center;

        background: white;
    
        padding-top: 2em;
        padding-bottom: 4em;
        background: white;
        border-radius: 0px 0px 50px 50px;

    }
    
    section #content_container h2 {
        font-family: "Frutiger_65_Bold";
        color: black;
    }

    section #content_container #download {

        width: 130px;
        height: 60px;

        justify-content: center;
        align-content: center;
        text-align: center;

        background: rgb(239, 114, 2);

    }

    section #content_container #download a p {
        color: black;
    }
    
    @media screen and (max-width: 1300px) {
    
        #video_div video {
    
            width: 70%;
    
        }
    
    }
    
    @media screen and (max-width: 800px) {
    
        #video_div video {
    
            width: 90%;
    
        }
    
        
    }
    </style>