import "./bootstrap";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const vm = new Vue({
    router,
    el: "#app",
    render: h => h(App)
});
