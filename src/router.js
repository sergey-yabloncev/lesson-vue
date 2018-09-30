import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/Users.vue")
    },
    {
      path: "/edit-user/:id",
      name: "edit-user",
      component: () => import("@/views/EditUser.vue")
    },
    {
      path: "/add-user",
      name: "add-user",
      component: () => import("@/views/AddUser.vue")
    }
  ]
});
