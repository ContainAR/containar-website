<template>


    <section>

        <div id="content_container">

            <h2>Hier könnnen Sie die Android-Version von ContainAR downloaden.</h2>


            <div id="download">
                <a href="app-release-1-4.apk"><p><img src="../assets/Android_Logo.png" /></p></a>
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
        

        background: white;
    
        padding-top: 2em;
        padding-bottom: 4em;
        background: white;
        border-radius: 0px 0px 50px 50px;

    }

    section #download {

        font-family: "Frutiger_65_Bold";
        text: black;

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