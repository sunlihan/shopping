<template>
    <div class="login">
      账号：<input type="number" placeholder="手机号" v-model="tel"><br>
      密码：<input type="password" placeholder="密码" v-model="pass"><br>
      <button @click="login">登录</button>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        name: "login",
      data(){
          return{
            tel:'13500000000',
            pass:123456789
          }
      },
      methods:{
          //登录
          login(){
            let params = new URLSearchParams();
            params.append('mobile',this.tel);
            params.append('pwd',this.pass);
            params.append( 'deviceId','123456');
            params.append('deviceName','oppor11');
            Axios.post(global.globalData.api+'/user/m/login',params).then(res=>{
              console.log(res.data.data)
              this.$store.commit('usermess',res.data.data)
              this.$router.push({ path: '/user' })
            })
          }
      }
    }
</script>

<style lang="scss" scoped>



</style>
