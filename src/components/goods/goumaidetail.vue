<template>
  <div class="goumaidetail">
    <p>{{goumaibasicInfo.name}}</p>
    <p>{{goumaibasicInfo.characteristic}}</p>
    <ul>
      <li><span>￥{{goumaibasicInfo.minPrice}}</span><span>原价￥{{goumaibasicInfo.originalPrice}}</span></li>
      <li>已售{{goumaibasicInfo.stores}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "goumaidetail",
      props:['goumaibasicInfo']
    }
</script>

<style scoped>

</style>
