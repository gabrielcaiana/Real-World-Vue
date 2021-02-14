import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: () => import("../views/EventList")
  },

  {
    path: "/event/:id",
    name: "event-show",
    component: () => import("../views/EventShow"),
		props: true,
		beforeEnter(routeTo, routeFrom, next) {
			store.dispatch('event/fetchEvent', routeTo.params.id).then((event) => {
				routeTo.params.event = event
				next()
			})
		}
  },

  {
    path: "/event/create",
    name: "event-create",
    component: () => import("../views/EventCreate")
  },

	{
		path: '*',
		component: () => import("../views/NotFound") 
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
	NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router;
