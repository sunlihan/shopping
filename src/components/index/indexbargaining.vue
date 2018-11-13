<template>
    <div class="indexbargaining">
      <p class="indexbargaining-title"><router-link to="/kanjia">全民砍价 <span class="iconfont icon-xiangyou02"></span></router-link></p>
      <ul class="indexbargaining-cont">
        <li v-for="(item,index) in kanjialist" :key="index">
          <div class="bargainpic"><router-link :to="{path:'/detail', query:{id:item.id}}"><img :src="item.pic" alt=""></router-link></div>
          <div class="bargaincont">
            <p class="bargaincont-title">{{item.name}}</p>
            <p class="bargaincont-name">{{item.characteristic}}</p>
            <ol class="bargaincont-pice">
              <li><a href="#"><span>￥{{item.minPrice}}</span><p>底价</p></a></li>
              <li><a href="#"><span>￥{{item.originalPrice}}</span><p>原价</p></a></li>
              <li><a href="#"><span>{{item.stores}}件</span><p>限量</p></a></li>
            </ol>
          </div>
        </li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "indexbargaining",
      computed:{
        kanjialist(){
          return this.$store.getters.kanjialist
        }
      }
    }
</script>

<style scoped>

</style>
