<template>
  <div class="swiper-container" id="indexhead">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="(item,index) in bannerdata" :key="index">
        <!--<router-link :to="{path:'/detail', query:{id:item.id}}">-->
          <img :src="item.picUrl" alt="">
        <!--</router-link>-->
      </li>

    </ul>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../assets/css/swiper.min.css'
  import Axios from 'axios'
  export default {
    data(){
      return{
        bannerdata:[]
      }
    },
    methods:{
      //轮播图
      getdata(){
        Axios.get(global.globalData.api+'/banner/list').then(res=>{
          console.log(res.data.data)
          this.bannerdata=res.data.data
        })
      }
    },
    created(){


    },
    mounted(){
     var mySwiper = new Swiper ('.swiper-container',{
        autoplay:{ delay:1000  },
       // autoplay:1000,
        loop:true,
        pagination:{
          el:".swiper-pagination",
          clickable:true,
        },
       observer:true,                           //修改swiper自己或子元素时，自动初始化swiper
       observeParents:true,                  //修改swiper的父元素时，自动初始化swiper
       // onSlideChangeEnd: function(swiper){
       //   swiper.update();
       //   mySwiper.startAutoplay();
       //   mySwiper.reLoop();
       //
       // }
      })
      this.getdata()
    }
  }
</script>

<style scoped>

</style>
