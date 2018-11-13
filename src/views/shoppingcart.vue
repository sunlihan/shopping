<template>
    <div class="shoppingcart">
        <shoppingcarthead></shoppingcarthead>
      <div class="shoppingcartdiv">
        <shoppingcartbody></shoppingcartbody>
      </div>
        <shoppingcartfoot></shoppingcartfoot>
    </div>
</template>

<script>
  import shoppingcarthead from '@/components/shoppingcart/shoppingcarthead'
  import shoppingcartbody from '@/components/shoppingcart/shoppingcartbody'
  import shoppingcartfoot from '@/components/common/indexfoot'

  export default {
        name: "shoppingcart",
      components:{
          shoppingcarthead,
          shoppingcartbody,
          shoppingcartfoot
      }
    }
</script>

<style scoped>

</style>
