import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoList from '../views/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vuex',
      name: 'vuex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/VuexView.vue'),
    },
    {
      path: '/todo/:status?',
      name: 'todo',
      component: TodoList,
    },
  ],
});
