<template>
  <div class="sureorder">
    <div class="samehead">
      <router-link to="/" class="iconfont icon-arrow-right leftjiantou"></router-link>
      <p class="samehead-title">确认订单</p>
    </div>
    <div class="sureorder-body">
      <!--<h5 ><span class="add">+</span>新增收货地址<span class="right">></span></h5>-->
      <ul>
        <li><span class="iconfont icon-dizhi"></span></li>
        <li><p>小明明治圆顶流口水了</p><p>北京顺地牢猎手到了</p></li>
        <li><router-link to="/" class="iconfont icon-arrow-right-copy-copy"></router-link></li>
      </ul>
      <p class="kongyu"></p>
      <h2>商品列表</h2>
      <ul class="ull">
        <li class="i1">
          <img src="../../assets/images/3.jpg" alt="">
        </li>
        <li class="i2">
          <span>小明</span>
          <p>枷森罗万象</p>
        </li>
        <li class="i3">
          <span>￥123</span>
          <p>x 2222</p>
        </li>
      </ul>
      <dl>
        <dt>
          <span>配送方式</span>
          <span>包邮</span>
        </dt>
        <dt>
          <span>备注</span>
          <input type="text" placeholder="如需备注请输入">
        </dt>
        <dt>
          <span>商品金额</span>
          <span>￥20</span>
        </dt>
      </dl>
    </div>
    <div class="sureorder-foot">
      <span>合计：￥399</span>
      <router-link to="/">提交订单</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sureorder"
    }
</script>

<style scoped>

</style>
