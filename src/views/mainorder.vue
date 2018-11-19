<template>
    <div class="mainorder">
      <div class="samehead">
        <router-link to="/user" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">我的订单</p>
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
  import Axios from 'axios'
  export default {
    data(){
      return{
        orderList:[],  //订单列表数据
        logisticsMap:{}, //每个订单对应的物流信息
        goodsMap:{}   //每个订单对应的商品列表信息
      }
    },
     created(){
        Axios.post(global.globalData.api + '/order/list?token=e0c12e15-510a-498b-bb4d-d7b62837faf8').then(res=>{
          console.log(res)
          let {data} = res.data
          console.log(data)
          // this.orderList=data.orderList
          // this.goodsMap=data.goodsMap
          // console.log(this.orderList)
          // console.log(this.goodsMap)
          this.$store.commit('mainorder',data)
        })
      }
  }
</script>

<style scoped>

</style>
