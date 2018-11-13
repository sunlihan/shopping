<template>
  <div class="jieshao">
      <div v-html="content"></div>
  </div>
</template>
<script>
  import bus from '../../bus'
    export default {
        name: "goodsjieshao",
      data(){
          return{
            content:''
          }
      },
     created(){
          bus.$on('Jieshao',(cont=>{
            this.content=cont
          }))
     }
    }
</script>

<style lang="scss" scoped>
.jieshao{
  width:100%;
  font-size:rem(45);
  text-align: center;

}
</style>
