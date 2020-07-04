import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Women from "@/pages/Women.vue"
import Mens from "@/pages/Mens.vue"
import ChildrensWear from "@/pages/ChildrensWear.vue"
import Infant from "@/pages/Infant.vue"
import Movement from "@/pages/Movement.vue"
import LimitedTimeOffer from "@/pages/LimitedTimeOffer.vue"

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/Women"
    },
    {
      path: "/Women",
      component: Women
    },
    {
      path: "/Mens",
      component: Mens
    },
    {
      path: "/ChildrensWear",
      component: ChildrensWear
    },
    {
      path: "/Infant",
      component: Infant
    },
    {
      path: "/Movement",
      component: Movement
    },
    {
      path: "/LimitedTimeOffer",
      component: LimitedTimeOffer
    }
  ]
})
