<template>
    <div class="yanxuan">
      <div class="samehead">
        <router-link to="/" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">严选专栏</p>
      </div>
      <div class="yanxuan-nav">
        <ul>
          <li><router-link to="/"><img src="../../assets/images/4.jpg" alt=""><span>严选推荐</span></router-link></li>
          <li><router-link to="/"><img src="../../assets/images/4.jpg" alt=""><span>严选推荐</span></router-link></li>
          <li><router-link to="/"><img src="../../assets/images/4.jpg" alt=""><span>严选推荐</span></router-link></li>
          <li><router-link to="/"><img src="../../assets/images/4.jpg" alt=""><span>严选推荐</span></router-link></li>
          <li><router-link to="/"><img src="../../assets/images/4.jpg" alt=""><span>严选推荐</span></router-link></li>
        </ul>
      </div>
      <p class="kongyu"></p>
      <ol class="yanxuan-cont">
        <li>
          <router-link to="/">
            <img src="../../assets/images/7.jpg" alt="">
            <p>
              <span>《舌尖》看不够？用味央猪解解馋</span>
              <span>舌尖上的未央猪骨汤</span>
              <span>查看详情</span>
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../../assets/images/7.jpg" alt="">
            <p>
              <span>《舌尖》看不够？用味央猪解解馋</span>
              <span>舌尖上的未央猪骨汤</span>
              <span>查看详情</span>
            </p>
          </router-link>
        </li>
      </ol>
    </div>
</template>

<script>
    export default {
        name: "yanxuanzhuanlan"
    }
</script>

<style scoped>

</style>
