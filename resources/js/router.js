import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import DefaultLayout from "./layouts/Default";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "DefaultLayout",
            component: DefaultLayout,
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: Home
                }
            ]
        }
    ]
});

export default router;
