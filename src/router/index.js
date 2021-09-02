import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  {
    path: "/add-blog",
    name: "AddBlog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "addBlog" */ "../views/AddBlog.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
