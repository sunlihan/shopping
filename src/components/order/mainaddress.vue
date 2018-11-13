<template>
    <div class="address">
      <div class="samehead">
        <router-link to="/" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">我的地址</p>
      </div>
      <div class="address-body">
        <ul>
          <li v-for="(item,index) in list">
            <span class="iconfont icon-xuanze" v-show="moren"></span>
            <p><span>{{item.linkMan}}</span><span>{{item.cityStr}}</span></p>
            <router-link to="/newaddress" class="iconfont icon-xiugai" @click="xiugai(item)"></router-link>
          </li>
        </ul>
      </div>
      <router-link to="/newaddress" class="address-foot">+新增地址</router-link>
    </div>
</template>

<script>
  import Axios from 'axios'
  import bus from '../../bus'
    export default {
      name: "mainaddress",
      data(){
        return{
          list:[],
          moren:Number('')
        }
      },
      created(){

      },
      mounted(){
        this.init()
        this.defaultadd()
      },
      methods:{
        init(){
          //地址列表
          let params = new URLSearchParams();
          params.append('token',"e0c12e15-510a-498b-bb4d-d7b62837faf8");
          Axios.post(global.globalData.api+'/user/shipping-address/list',params).then(res=>{
            console.log(res)
            let {data}=res.data
            this.list=data
          })
        },
        //设置默认地址
        defaultadd(){
          let params = new URLSearchParams();
          params.append('token',"e0c12e15-510a-498b-bb4d-d7b62837faf8");
          Axios.post(global.globalData.api+'/user/shipping-address/default',params).then(res=>{
            console.log(res.data)
            this.moren=res.data.data.id
          })
        },
        xiugai(item){
         console.log(item)
        },
      }
    }
</script>

<style scoped>

</style>
