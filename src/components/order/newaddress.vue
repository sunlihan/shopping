<template>
    <div class="newaddress">
      <div class="samehead">
        <router-link to="/mainaddress" class="iconfont icon-arrow-right leftjiantou"></router-link>
        <p class="samehead-title">新增地址</p>
      </div>
      <div class="newaddress-body">
        <ul class="address-message">
          <li><span>联系人</span><input type="text" placeholder="姓名" v-model="linkMan"></li>
          <li><span>手机号码</span><input type="number" placeholder="11位手机号码" v-model="mobile"></li>
          <li>
            <span>选择地区</span>
            <select @change="sel" class="sel1">
              <option value="">请选择</option>
              <option :value="item.name" v-for="item in shengfendata" >{{item.name}}</option>
            </select>
            <select  class="sel2">
              <option value="请选择">请选择</option>
            </select>
          </li>
          <li><span>详细地址</span><input type="text" placeholder="街道门牌信息"  v-model="address"></li>
          <li><span>邮政编号</span><input type="text" v-model="code"></li>
        </ul>
        <p><a href="#" @click="baocun()">保存</a></p>
        <p>
          <a href="#" :style="{background:'#1aad19'}">从微信读取</a>
          <a href="#" :style="{background:'#fff',color:'#000'}" >删除地址</a>
        </p>
        <p><a href="#" :style="{background:'#fff',color:'#000'}">取消</a></p>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
  import bus from '../../bus'
    export default {
      name: "newaddress",
      data(){
        return{
          shengfendata:[],//省份
          address:'',
          code:'',
          linkMan:'',
          mobile:'',
          citydata:[]//城市
        }
      },
      // created(){
      //   bus.$on('xiugai',(id)=>{
      //     console.log(id)
      //   })
      // },
      methods:{
        //省份
        shengfen(){
          Axios.post('https://api.it120.cc/common/region/province').then(res=>{
            this.shengfendata=res.data.data
            console.log(this.shengfendata)
          })
        },
        sel(){
          console.log(this)


          // Axios.post('https://api.it120.cc/common/region/child')
          // for(let i in this.shengfendata){
          //
          // }
          // let params = new URLSearchParams();
          // params.append('pid',);
          // Axios.post('https://api.it120.cc/common/region/child')
        },
        // city(){
        //   Axios.post('https://api.it120.cc/common/region/child')
        // },

        //添加地址
        baocun(){
          let params = new URLSearchParams();
          params.append('address', this.address);
          params.append('cityId','110000');
          params.append('code',this.code);
          params.append('linkMan',this.linkMan);
          params.append('mobile',this.mobile);
          params.append('provinceId','0');
          params.append('token',"e0c12e15-510a-498b-bb4d-d7b62837faf8");
          Axios.post(global.globalData.api+'/user/shipping-address/add',params).then(res=>{
            console.log(res)
            this.$router.push({path:'/mainaddress'});
          })
        }
        //删除地址
      },
      mounted(){
        this.shengfen()

      }
    }
</script>

<style scoped>

</style>
