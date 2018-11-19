import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'//首页
import classify from '@/views/classify'//分类
import shoppingcart from '@/views/shoppingcart'//购物车
import user from '@/views/user'//个人

import kanjia from '@/components/goods/kanjialiebiao'//砍价列表
import yanxuan from  '@/components/goods/yanxuanzhuanlan'//严选专栏


import mainorder from '@/views/mainorder'  //我的订单
import daifukuan from '@/components/order/daifukuan'//待付款
import daifahuo from '@/components/order/daifahuo'// 待发货
import sureorder from '@/components/order/sureorder' //确认订单


import detail from '@/views/detail'//详情
import address from '@/components/order/mainaddress'//我的地址
import newaddress from '@/components/order/newaddress'//新增地址

import login from '@/views/login'//登录页面
import surefukuan from '@/components/order/surefukuan'//确认付款




Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component:index
    },
    {
      path: '/classify',
      component:classify
    },
    {
      path: '/shoppingcart',
      component:shoppingcart
    },
    {
      path: '/user',
      component:user
    },
    {
      path: '/kanjia',
      component:kanjia
    },
    {
      path: '/yanxuan',
      component:yanxuan
    },
    {
      path: '/detail/:id?',
      component:detail
    },
    {
      path: '/mainaddress',
      component:address
    },
    {
      path: '/newaddress',
      component:newaddress
    },
    {
      path: '/sureorder',
      component:sureorder
    },
    {
      path: '/login',
      component:login
    },
    {
      path:'/surefukuan',
      component:surefukuan
    },
    {
      path: '/mainorder',
      component:mainorder,
      children:[
        {
          path:'/daifukuan',
          component:daifukuan
        },
        {
          path:'/daifahuo',
          component:daifahuo
        }
      ],redirect:'/daifukuan'
    }
  ]
})
