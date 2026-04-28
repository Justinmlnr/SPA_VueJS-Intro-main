import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { afficherMessage } from "./utils/message.js";

console.log(afficherMessage());

createApp(App).mount("#app");