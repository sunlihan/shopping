<template>
  <div class="sureorder">
    <div class="samehead">

      <router-link :to="{path:'/detail', query:{id:getquery.dataid}}" class="iconfont icon-arrow-right leftjiantou"></router-link>
      <p class="samehead-title">确认订单</p>
    </div>
    <div class="sureorder-body">
      <!--<h5 ><span class="add">+</span>新增收货地址<span class="right">></span></h5>-->
      <ul  v-for="(item,index) in DefaultAdd" :key="index" v-if="item.isDefault===true">
        <li><span class="iconfont icon-dizhi"></span></li>
        <li><p>{{item.linkMan}}{{item.mobile}}</p><p>{{item.address}}</p></li>
        <li><router-link to="/mainaddress" class="iconfont icon-arrow-right-copy-copy"></router-link></li>
      </ul>
      <p class="kongyu"></p>
      <h2>商品列表</h2>
      <ul class="ull">
        <li class="i1">
          <img :src="getquery.datapic" alt="">
        </li>
        <li class="i2">
          <span>{{getquery.dataname}}</span>
          <p>{{getquery.databig}}{{getquery.datasmall}}</p>
        </li>
        <li class="i3">
          <span>￥{{getquery.dataprice}}</span>
          <p>x {{getquery.datanum}}</p>
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
          <span>￥{{getquery.datanum*getquery.dataprice}}</span>
        </dt>
      </dl>
    </div>
    <div class="sureorder-foot">
      <span>合计：￥{{getquery.datanum*getquery.dataprice}}</span>
      <router-link to='/surefukuan'>提交订单</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sureorder",
      data(){
          return{
           getquery:{},
            DefaultAdd:[] //地址
          }
      },
      created(){
        console.log(this.$route.query)
        this.getquery=this.$route.query
        this.DefaultAdd=JSON.parse(sessionStorage.getItem("data"))
        console.log(this.DefaultAdd)
      },





    }
</script>

<style scoped>

</style>
