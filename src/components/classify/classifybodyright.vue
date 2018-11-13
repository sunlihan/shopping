<template>
    <div class="classifybodyright">
      <div class="classifybodyright-cont">
        <div class="cont-top">
          <div class="swiper-container" id="swiper">
            <ul class="swiper-wrapper" id="wrapper">
              <li class="swiper-slide"><img src="../../assets/images/6.jpg" alt=""></li>
              <li class="swiper-slide"><img src="../../assets/images/6.jpg" alt=""></li>
            </ul>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!--所有分类-->
        <ul class="cont-body">
            <li class="cont-body-li" v-for="(item,index) in List" :key="index">
              <a href="#" class="cont-body-li-item">
                <p class="item-pic"><img :src="item.icon" alt=""></p>
                <p class="item-name">{{item.name}}</p>
              </a>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../assets/css/swiper.min.css'
  import bus from '@/bus'
  export default {
       data(){
      return{
        list:[]
      }
    },
    created(){
      bus.$on('up',(index=>{
        switch (index){
          case 0:
            this.list= this.rightdata.filter(item=>{
              return item.type==='jujia2'
            })
            break;
          case 1:
            this.list= this.rightdata.filter(item=>{
              return item.type==='peishi2'
            })
            break;
          case 2:
            this.list= this.rightdata.filter(item=>{
              return item.type==='fuzhuang2'
            })
            break;
          default:
            this.list= this.rightdata.filter(item=>{
              return item.type==='dianqi2'
            })
            break;
        }
      }))
    },
    computed:{
      List() {
        return this.list = this.list.length === 0 ? this.rightdata : this.list;
      },
      rightdata(){
        return this.$store.getters.rightclassify
      }
    },
    mounted(){
      new Swiper ('#swiper',{
        autoplay:{ delay:1000  },
        loop:true,
        pagination:{
          el:".swiper-pagination",
          clickable:true,
        }
      })

    },


  }
</script>

<style scoped>

</style>
