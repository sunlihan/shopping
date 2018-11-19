<template>
    <div class="surefukuan">
      <div class="samehead">
        <router-link to="/" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">确认付款</p>
      </div>
      <div class="surefukuan-body">
       <ul>
         <li><span class="iconfont icon-yue"></span></li>
         <li><p>商品总额：<span>￥309</span></p><p>订单号：21323223232321323</p></li>
       </ul>
        <ul>
          <li><span class="iconfont icon-dizhi"></span></li>
          <li v-for="(item,index) in DefaultAdd" :key="index" v-if="item.isDefault===true">
            <p>{{item.linkMan}} {{item.mobile}}</p>
            <p>{{item.address}}</p>
          </li>
        </ul>
      </div>
      <p class="surefukuan-foot">微信支付5555</p>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        name: "surefukuan",
      data(){
        return{
          DefaultAdd:[], //地址
        }
      },
      created(){
       this.DefaultAdd=JSON.parse(sessionStorage.getItem("data"))
        let params = new URLSearchParams();
        params.append('token',"df103a30-efef-410f-a2ae-61887a51130e");
        params.append('goodsJsonStr','[{goodsId:'+this.sku.goodsId+'number:'+this.num+'propertyChildIds:'+this.sku.propertyChildIds+'logisticsType:0}]')
        Axios.post(global.globalData.api + '/order/create').then(res=>{
          console.log(res)
        })
      },
      computed:{
          sku(){
            return this.$store.state.sku
          },
        num(){
            return this.$store.state.num
        }
      }
    }
</script>

<style scoped>

</style>
