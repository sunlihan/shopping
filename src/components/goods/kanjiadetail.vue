<template>
    <div class="kanjiadetail">
      <p>{{kanjiabasicInfo.name}}</p>
      <p>{{kanjiabasicInfo.characteristic}}</p>
      <ul>
        <li><p>底价<span>￥{{kanjiabasicInfo.minPrice}}</span></p><span>原价￥{{kanjiabasicInfo.originalPrice}}</span></li>
        <li>库存{{kanjiabasicInfo.stores}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "kanjiadetail",
      props:['kanjiabasicInfo']
    }
</script>

<style scoped>

</style>
