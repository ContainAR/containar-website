import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../components/LandingPage.vue";
import Impress from "../components/Imprint.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import Workflow from "../components/Workflow.vue";
import Kurz from "../components/KURZ.vue";
import Contact from "../components/Contact.vue"
import NotFound from "../components/NotFound.vue";
import Android from "../components/Android.vue"


const routes = [
    {path: "/", component: LandingPage},
    {path: "/imprint", component: Impress},
    {path: "/flyer", component: Impress},
    {path: "/contact", component: Contact},
    {path: "/privacypolicy", component: PrivacyPolicy},
    {path: "/workflow", component: Workflow},
    {path: "/kurz", component: Kurz},
    {path: "/android", component: Android},
    {path: '/:catchAll(.*)', component: NotFound, name: 'NotFound'},

];

const router = createRouter({

    history: createWebHistory(),
    routes

});


export default router;