<template>
  <div class="user">
    <div class="user-head">
      <p class="head-pic"><router-link to="/login"><img src="../assets/images/user.jpg" alt=""></router-link></p>
      <p class="head-name">
        <span class="head-name-user">小二，陪我看海</span>
        <span class="head-name-score">积分：20</span>
      </p>
    </div>
    <!--公告-->
    <p class="announcement"><span class="iconfont icon-gonggao"></span>新上线更稳定的付费快递查询接口</p>
    <!--我的订单-->
    <div class="ordergoods">
      <p class="ordergoos-top">
        <router-link to="/mainorder" class="ordergoos-top-l"><span class="iconfont icon-jifendingdan"></span> 我的订单</router-link>
        <router-link to="/mainorder" class="ordergoos-top-r iconfont icon-arrow-right-copy-copy"></router-link>
      </p>
      <ul class="ordergoods-ul">
        <li class="ordergoods-ul-li"><a href="#"><span class="iconfont icon-daizhifudingdan"></span>
          <p>侍付款</p></a></li>
        <li class="ordergoods-ul-li"><a href="#"><span class="iconfont icon-daifahuo"></span>
          <p>侍发货</p></a></li>
        <li class="ordergoods-ul-li"><a href="#"><span class="iconfont icon-daishouhuo"></span>
          <p>侍收货</p></a></li>
        <li class="ordergoods-ul-li"><a href="#"><span class="iconfont icon-daipingjia"></span>
          <p>侍评价</p></a></li>
      </ul>
    </div>
    <!--关于我的所有-->
    <ul class="about-ul">
      <li class="about-ul-li">
        <a href="#">
          <span class="about-ul-li-tubiao iconfont icon-yue" :style="{color: '#e59477'}"></span>
          <p class="about-ul-li-me">我的余额</p>
        </a>
      </li>
      <li class="about-ul-li">
        <a href="#">
          <span class="about-ul-li-tubiao iconfont icon-kanjia" :style="{color: '#e2a090'}"></span>
          <p class="about-ul-li-me">我的砍价</p>
        </a>
      </li>
      <li class="about-ul-li">
        <a href="#">
          <span class="about-ul-li-tubiao iconfont icon-quanqia" :style="{color: '#f9ae6a'}"></span>
          <p class="about-ul-li-me">我的礼券</p>
        </a>
      </li>
      <li class="about-ul-li">
        <a href="#">
          <span class="about-ul-li-tubiao iconfont icon-unie601" :style="{color: '#f5c072'}"></span>
          <p class="about-ul-li-me">我的收藏</p>
        </a>
      </li>
      <li class="about-ul-li">
        <router-link to="/mainaddress">
          <span class="about-ul-li-tubiao iconfont icon-dizhi" :style="{color: '#71a7e7'}"></span>
          <p class="about-ul-li-me">我的地址</p>
        </router-link>
      </li>
      <li class="about-ul-li">
        <a href="#">
          <span class="about-ul-li-tubiao iconfont icon-kefu" :style="{color: '#8a99dc'}"></span>
          <p class="about-ul-li-me">联系客服</p>
        </a>
      </li>
    </ul>
    <p class="banben">清欢严选v2.2.0</p>
    <!--脚-->
    <userfoot></userfoot>
  </div>
</template>

<script>
  import userfoot from '@/components/common/indexfoot'
  import Axios from 'axios'
  export default {
    name: "user",
    components: {
      userfoot
    },
    methods:{
      // login(){
      //   alert(222)
      // }
    }

  }
</script>

<style scoped>

</style>
