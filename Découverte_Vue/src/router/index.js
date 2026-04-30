import { createRouter, createWebHistory } from "vue-router";
import CitiesList from "../views/CitiesList.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/villes",
    name: "cities-list",
    component: CitiesList
  },
  {
    path: "/home",
    name: "accueil",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;