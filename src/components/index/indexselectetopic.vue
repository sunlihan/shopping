<template>
    <div class="selectetopic">
      <p class="selectetopic-title"><router-link to="/yanxuan">精选专题 <span class="iconfont icon-xiangyou02"></span></router-link></p>
      <div class="selectetopic-cont">
        <ul class="selectetopic-ul">
          <li class="selectetopic-li" v-for="(item,index) in topic" :key="index">
            <router-link to="/" class="selectetopic-li-pic">
              <img :src="item.pic" alt="">
            </router-link>
            <p class="selectetopic-li-title">{{item.title}}</p>
            <p class="selectetopic-li-cont">{{item.descript}}</p>
          </li>
          <!--<li class="selectetopic-li">-->
            <!--<div class="selectetopic-li-pic"><img src="../../assets/images/4.jpg" alt=""></div>-->
            <!--<p class="selectetopic-li-title">别吃外卖了，来喝碗鸡汤</p>-->
            <!--<p class="selectetopic-li-cont">鸡汤、银耳羹即食好物</p>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        name: "indexselectetopic",
      data(){
          return{
            topic:[]
          }
      },
      created(){
        Axios.get(global.globalData.api+'/cms/news/list').then(res=>{
          console.log(res)
          this.topic=res.data.data
        })
      }
    }
</script>

<style scoped>

</style>
