<template>
    <div class="peoplegood">
      <p class="peoplegood-title">人气推荐 <span class="iconfont icon-xiangyou02"></span></p>
      <ul class="peoplegood-cont">
        <li class="peoplegood-li" v-for="(item,index) in tuijianlist" :key="index">
          <router-link class="peoplegood-li-pic" :to="{path:'/detail', query:{id:item.id}}"><img :src="item.pic" alt=""></router-link>
          <p class="peoplegood-li-name">{{item.name}}</p>
          <p class="peoplegood-li-jian">{{item.characteristic}}</p>
          <p class="peoplegood-li-price">￥{{item.originalPrice}}</p>
        </li>
        <!--<li class="peoplegood-li">-->
          <!--<div class="peoplegood-li-pic"><img src="../../assets/images/5.jpg" alt=""></div>-->
          <!--<p class="peoplegood-li-name">清欢素雅小程序端模版程序端模版</p>-->
          <!--<p class="peoplegood-li-jian">全场模版使用优惠券立减88元</p>-->
          <!--<p class="peoplegood-li-price">￥299</p>-->
        <!--</li>-->

      </ul>
    </div>
</template>

<script>
    export default {
        name: "peoplegood",
      computed:{
          tuijianlist(){
            return this.$store.getters.tuijianlist
          }
      }
    }
</script>

<style scoped>

</style>
