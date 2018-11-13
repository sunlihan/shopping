<template>
    <div class="kanjia">
       <div class="samehead">
        <router-link to="/" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">砍价列表</p>
      </div>
      <ul class="kanjiabody">
        <li v-for="(item,index) in kanjialist" :key="index">
          <router-link :to="{path:'/detail', query:{id:item.id}}">
            <div><img :src="item.pic" alt=""></div>
            <div>
              <p>{{item.name}}</p>
              <p>{{item.characteristic}}</p>
              <ol>
                <li><p>￥{{item.minPrice}}</p><p>最低价</p></li>
                <li><p>￥{{item.originalPrice}}</p><p>原价</p></li>
                <li><p>{{item.stores}}</p><p>限量</p></li>
              </ol>
            </div>
          </router-link>
        </li>
        <!--<li>-->
          <!--<router-link to="/">-->
            <!--<div><img src="../../assets/images/3.jpg" alt=""></div>-->
            <!--<div>-->
              <!--<p>连盖收纳盒两件组合装</p>-->
              <!--<p>连盖收纳盒 大小组合装</p>-->
              <!--<ol>-->
                <!--<li><p>￥99</p><p>最低价</p></li>-->
                <!--<li><p>￥35</p><p>原价</p></li>-->
                <!--<li><p>18</p><p>限量</p></li>-->
              <!--</ol>-->
            <!--</div>-->
          <!--</router-link>-->
        <!--</li>-->
      </ul>
    </div>

</template>

<script>
     export default {
        name: "kanjialiebiao",
       computed:{
         kanjialist(){
           return this.$store.getters.kanjialist
         }
       }
     }
</script>

<style scoped>

</style>
