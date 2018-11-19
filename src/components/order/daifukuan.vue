<template>
    <ul class="daifukuan">
      <li v-for="(item,index) in orderlist.orderList" :key="index" v-if="item.status===-1||item.status===0">
        <p></p>
        <p><span>下单时间：{{item.dateUpdate}}</span><a href="#">{{item.statusStr}}</a></p>
        <p>订单号:{{item.orderNumber}}</p>
        <p @click="goodsMap(item.id)"><a href="#"><img src="../../assets/images/5.jpg" alt=""></a></p>
        <div>
          <p>合计：￥499</p>
          <p><span>取消订单</span><span>立即支付</span></p>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  sname: "daifukuan",
  computed: {
    orderlist() {
      return this.$store.state.orderlist
    }
  },
  methods: {
    goodsMap(id) {
      console.log(id.toString())
      let a=id.toString()
      console.log(this.orderlist.goodsMap)
    },


  }
}
</script>

<style scoped>

</style>
