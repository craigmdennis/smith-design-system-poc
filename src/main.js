// main.js/ts
import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import App from "./App.vue";

// Add the necessary CSS
import "./assets/main.scss";

const app = createApp(App);
app.use(createBootstrap()); // Important
app.mount("#app");
