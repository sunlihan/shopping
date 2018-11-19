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
            <select @change="sel" class="sel1" v-model="val">
              <option value="">请选择</option>
              <option :value="item.id" v-for="item in shengfendata" >{{item.name}}</option>
            </select>
            <select  class="sel2" v-model="val1" @change="sel1">
              <option value="">请选择</option>
              <option :value="item.id" v-for="item in citydata">{{item.name}}</option>
            </select>
            <select  class="sel2">
              <option value="">请选择</option>
              <option value="" v-for="item in xianqudata">{{item.name}}</option>
            </select>
          </li>
          <li><span>详细地址</span><input type="text" placeholder="街道门牌信息"  v-model="address"></li>
          <li><span>邮政编号</span><input type="text" v-model="code"></li>
        </ul>
        <p><a href="#" @click="baocun()">保存</a></p>
        <p>
          <a href="#" :style="{background:'#1aad19'}" v-if="!List.length">从微信读取</a>
          <a href="#" :style="{background:'#fff',color:'#000'}" @click="del(List[0].id)" v-if="List.length">删除地址</a>
        </p>
        <p><a href="#" :style="{background:'#fff',color:'#000'}">取消</a></p>
      </div>
      <!--model-->
      <div class="newaddress-model">
        <div class="newaddress-model-cont">
          <h5>提示</h5>
          <p>确定要删除收货地址吗？</p>
          <p><button>取消</button><router-link to="/mainaddress">确定</router-link></p>
        </div>
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
          citydata:[],//城市
          xianqudata:[],//县区
          List:[],  //修改地址
          val:'',
          val1:''


        }
      },
     created(){
        //修改地址接口
        console.log(this.$route)
        let {id} = this.$route.query;
        let params = new URLSearchParams();
        params.append('id',id);
        params.append('token',"e0c12e15-510a-498b-bb4d-d7b62837faf8");
        Axios.post(global.globalData.api+'/user/shipping-address/update',params).then(res=>{
          console.log(res)
        })
        this.List=JSON.parse(sessionStorage.getItem("data"))
        this.List=this.List.filter(item=>{
          return item.id===id
        })
        // console.log(this.List[0].linkMan)
       this.address=this.List[0].address
       this.code=this.List[0].code
       this.linkMan=this.List[0].linkMan
       this.mobile=this.List[0].mobile
     },
      methods:{
        //省份
        shengfen(){
          Axios.post('https://api.it120.cc/common/region/province').then(res=>{
            this.shengfendata=res.data.data
            console.log(this.shengfendata)
          })
        },
        //市区
        sel(){
          console.log(this.val)
          let params=new URLSearchParams()
          params.append('pid',this.val)
          Axios.post('https://api.it120.cc/common/region/child',params).then(res=>{
            console.log(res.data)
            sessionStorage.setItem('citydata',JSON.stringify(res.data.data))
            this.citydata=JSON.parse(sessionStorage.getItem('citydata'))
            console.log(this.citydata)

          })
         },
        //县区
        sel1(){
          console.log(this.val1)
          let params=new URLSearchParams()
          params.append('pid',this.val1)
          Axios.post('https://api.it120.cc/common/region/child',params).then(res=>{
            console.log(res.data)
            sessionStorage.setItem('xianqu',JSON.stringify(res.data.data))
            this.xianqudata=JSON.parse(sessionStorage.getItem('xianqu'))
            console.log(this.xianqudata)
          })
        },

        //添加地址
        baocun(){
          if(this.linkMan===''||this.mobile===''||this.address===''||this.code===''){
            alert("请选择")
          }else {
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

        },
        //删除地址
        del(id){
          let params = new URLSearchParams();
          params.append('id',id);
          params.append('token',"e0c12e15-510a-498b-bb4d-d7b62837faf8");
          Axios.post(global.globalData.api+'/user/shipping-address/delete',params).then(res=>{
            if(res.data.code===0){
              $('.newaddress-model').fadeIn()
            }
          })
        }
      },
      mounted(){
        this.shengfen()
      }
    }
</script>

<style scoped>

</style>
