<template>
  <div class="box">
    <div class="div">
      <indexhead></indexhead>
      <indexnav></indexnav>
      <indexbargaining></indexbargaining>
      <indexselectetopic></indexselectetopic>
      <indexpeoplegood></indexpeoplegood>
      <indexgift></indexgift>
    </div>
    <indexfoot></indexfoot>
    </div>

</template>

<script>

   import indexhead from '@/components/index/indexhead'
  import indexnav from '@/components/index/indexnav'
  import indexbargaining from '@/components/index/indexbargaining'
  import indexselectetopic from '@/components/index/indexselectetopic'
  import indexpeoplegood from '@/components/index/indexpeoplegood'
  import indexgift from '@/components/index/indexgift'
  import indexfoot from '@/components/common/indexfoot'
  import Axios from 'axios'
    export default {
    components:{
      indexhead,
      indexnav,
      indexbargaining,
      indexselectetopic,
      indexpeoplegood,
      indexgift,
      indexfoot
    },
    beforeCreate:function () {
      Axios.get(global.globalData.api+'/shop/goods/list').then(res=>{
      console.log(res.data)
        let {data}=res.data
        this.$store.commit('list',data)

    })
    },

    methods:{
       },
    computed:{

    }
  }
</script>

<style lang="scss" scoped>

</style>
