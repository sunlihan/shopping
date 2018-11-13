<template>
  <div class="navbox">
    <ul class="nav">
      <li><a href="#"><span class="iconfont icon-qiandao-01" :style="{color:'#f9621f'}"></span><p>签到</p></a></li>
      <li><a href="#"><span class="iconfont icon-huangguan" :style="{color:'#f9621f'}"></span><p>礼券</p></a></li>
      <li><router-link to="/kanjia"><span class="iconfont icon-shopping-bag" :style="{color:'#f9621f'}"></span><p>砍价</p></router-link></li>
      <li><a href="#"><span class="iconfont icon-deng" :style="{color:'#f9621f'}"></span><p>专栏</p></a></li>
    </ul>
  </div>


</template>

<script>
    export default {
        name: "indexnav"
    }
</script>

<style scoped>

</style>
