<template>
    <div class="classify">
      <classifyhead></classifyhead>
      <classifybody></classifybody>
      <classifyfoot></classifyfoot>
    </div>
</template>

<script>
  import classifyhead from '@/components/classify/classifyhead'
  import classifybody from  '@/components/classify/classifybody'
  import classifyfoot from '@/components/common/indexfoot'
  import Axios from 'axios'

    export default {
      name: "classify",
      components: {
        classifyhead,
        classifybody,
        classifyfoot
      },
      beforeCreate(){
        Axios.post(global.globalData.api+'/shop/goods/category/all').then(res=>{
          console.log(res.data)
          let {data}=res.data
          this.$store.commit('classifylist',data)
        })
      }
    }
</script>

<style scoped>

</style>
