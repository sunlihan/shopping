<template>
    <div class="mainorder">
      <div class="samehead">
        <router-link to="/user" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">砍价列表</p>
      </div>
      <ul class="mainorder-nav">
        <li><router-link to="/daifukuan">待付款</router-link></li>
        <li><router-link to="/daifahuo">待发货</router-link></li>
        <li><router-link to="/daifahuo">待收货</router-link></li>
        <li><router-link to="/daifahuo">待评价</router-link></li>
        <li><router-link to="/daifahuo">已完成</router-link></li>
      </ul>
      <div class="mainorder-body">
        <div class="mainorder-body-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
