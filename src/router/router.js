import { createRouter, createWebHashHistory } from "vue-router";

import LandingPage from "../components/LandingPage.vue";
import Impress from "../components/Imprint.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import Workflow from "../components/Workflow.vue";

const routes = [
    {path: "/", component: LandingPage},
    {path: "/imprint", component: Impress},
    {path: "/privacypolicy", component: PrivacyPolicy},
    {path: "/workflow", component: Workflow}

];

const router = createRouter({

    history: createWebHashHistory(),
    routes

});


export default router;