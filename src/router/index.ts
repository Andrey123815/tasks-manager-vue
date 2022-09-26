import {createRouter, createWebHistory} from "vue-router";
import TasksEditorView from "../views/TasksEditorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "editor",
      component: TasksEditorView,
    },
    {
      path: "/history",
      name: "history",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/TasksHistoryView.vue"),
    },
  ],
});

export default router;
