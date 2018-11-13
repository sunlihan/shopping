<template>
    <div class="classifybody">
      <div class="classifybody-cont">
        <ul class="classifybody-left"  v-for="(item,index) in leftdata" :key="index" >
          <li class="classifybody-left-title" @click="classify(index)"><span>{{item.name}}</span></li>
         </ul>
      </div>
      <!--<classifybodyright :listData="rightdata" :list='list'></classifybodyright>-->
      <classifybodyright></classifybodyright>
    </div>
</template>

<script>
  import classifybodyright from './classifybodyright'
  // import Axios from 'axios'
  import bus from '@/bus'
    export default {
        name: "classifybody",
      computed:{
        leftdata(){
          return this.$store.getters.leftclassify
        }
      },
      components:{
          classifybodyright
      },
       methods:{
        classify(index){
          bus.$emit('up',index)
        }
      }
    }
</script>

<style scoped>

</style>
