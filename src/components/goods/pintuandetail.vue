<template>
  <div class="pintuandetail">
    <p>{{pintuanbasicInfo.name}}</p>
    <p>{{pintuanbasicInfo.characteristic}}</p>
    <ul>
      <li>
        <p>拼团价<span>￥{{pintuanbasicInfo.pingtuanPrice}}</span></p>
        <p><span>2人开团</span><br><s>原价￥{{pintuanbasicInfo.originalPrice}}</s></p>
      </li>
      <li>已团{{pintuanbasicInfo.stores}}件</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "pintuandetail",
      props:['pintuanbasicInfo']
    }
</script>

<style scoped>

</style>
