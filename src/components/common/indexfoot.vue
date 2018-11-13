<template>
    <ul class="foot">
      <li><router-link to="/"><span class="iconfont icon-shouye"></span><p>首页</p></router-link></li>
      <li><router-link to="/classify"><span class="iconfont icon-drawer2chouti"></span><p>分类</p></router-link></li>
      <li><router-link to="/shoppingcart"><span class="iconfont icon-gouwuchekong"></span><p>购物车</p></router-link></li>
      <li><router-link to="/user"><span class="iconfont icon-icon"></span><p>个人</p></router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "indexfoot"
    }
</script>

<style scoped>

</style>
