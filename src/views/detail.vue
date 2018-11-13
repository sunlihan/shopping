<template>
  <div class="detail">
    <div class="detail-div">
      <!--轮播图-->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in detaillist.pics" :key="index"><img :src="item.pic" alt=""></li>
          <!--<li class="swiper-slide"><img src="../assets/images/3.jpg" alt=""></li>-->
        </ul>
        <div class="swiper-pagination"></div>
      </div>

      <!--商品详情-->
        <!--砍价-->
      <div v-show="flage==='kanjia'"><kanjiadetail :kanjiabasicInfo='detaillist.basicInfo'></kanjiadetail></div>
      <!--拼团-->
      <div v-show="flage==='pintuan'"><pintuandetail :pintuanbasicInfo='detaillist.basicInfo'></pintuandetail></div>
      <!--购买-->
      <div v-show="flage==='goumai'"><goumaidetail></goumaidetail></div>

      <p class="kongyu"></p>
      <!--选择规格和版本-->
      <a class="checkguige" v-show="flage!='kanjia'"  @click='yuanjiagoumai()'>
        <span>选择规格：选择版本</span>
        <span class="iconfont icon-arrow-right-copy-copy"></span>
      </a>
      <p class="kongyu" v-show="flage!='kanjia'"></p>

      <!--商品介绍和评价-->
      <ul class="detail-nav">
        <li @click="jieshao()"><span>商品介绍</span></li>
        <li @click="pingjia()"><span>商品评价</span></li>
      </ul>
      <div v-show="code" id="jieshao" v-html="detaillist.content"></div>
      <div v-show="!code" id="pingjia">商品谰价</div>
    </div>


    <!--页脚-->
    <div class="detail-foot">
      <!--砍价-->
      <router-link to="/" class="detail-foot-kanjia" v-show="flage==='kanjia'">立即发起砍价，最低可砍到{{detaillist.basicInfo.minPrice}}元</router-link>
      <!--购买-->
      <ul class="detail-foot-goumai" v-show="flage==='goumai'">
        <li><a href="#" class="iconfont icon-kefu"></a></li>
        <li><a href="#" class="iconfont icon-gouwuchekong"></a><span>0</span></li>
        <li><span class="iconfont icon-unie601" ></span><span class="iconfont icon-shoucang"></span></li>
        <li><a href="#">立即购买</a></li>
        <li><a href="#">加入购物车</a></li>
      </ul>
      <!--拼团-->
      <ul class="detail-foot-pintuan" v-show="flage==='pintuan'">
        <li><a href="#" class="iconfont icon-kefu"></a></li>
        <li><span class="iconfont icon-unie601" ></span><span class="iconfont icon-shoucang"></span></li>
        <li @click="yuanjiagoumai()"><a href="#"><span>￥{{detaillist.basicInfo.originalPrice}}</span><p>原价购买</p></a></li>
        <li><a href="#"><span>￥{{detaillist.basicInfo.pingtuanPrice}}</span><p>一键开团</p></a></li>
      </ul>
    </div>
    <!--模态框-->
    <div class="modal">
      <div class="modal-cont">
        <ul class="modal-cont-topic">
          <li><img :src="detaillist.basicInfo.pic" alt=""></li>
          <li>
            <p>{{detaillist.basicInfo.name}}</p>
            <p>￥{{detaillist.basicInfo.pingtuanPrice}}</p>
          </li>
          <li @click="Close()"><span class="iconfont icon-guanbi"></span></li>
        </ul>
        <ul class="modal-cont-leixing">
          <li v-for="(item,index) in detaillist.properties">
            <span>选择尺寸和颜色</span>
            <p>
              <span>{{item.name}}</span>
            </p>
            <span class="span2">选择尺寸和颜色</span>
             <p>
              <span  v-for="(aa,index) in item.childsCurGoods">{{aa.name}}</span>
            </p>
          </li>
          <li>
            <span>选择服务</span>
            <p><span>授权版（加密版本）</span><span>开发版（未加农牧民）</span></p>
          </li>
        </ul>
        <ul class="modal-cont-num">
          <li>购买数量</li>
          <li><button @click="jian()">-</button><span>{{num}}</span><button @click="add()">+</button></li>
        </ul>
        <p class="modal-cont-foot" @click="xiadan()">立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../assets/css/swiper.min.css'
  import kanjiadetail from '../components/goods/kanjiadetail'
  import pintuandetail from '../components/goods/pintuandetail'
  import goumaidetail from '../components/goods/goumaidetail'
  import Axios from 'axios'
  import bus from '../bus'
  export default {
      name: "detil",
    data(){
      return{
        detaillist:{},
        code:true,
        flage:'',
        guige:{},
        bigname:'',
        smallname:''
      }
    },
    computed:{
      num(){
        return this.$store.state.num
      }
    },

    methods:{
      getdetaillist(){
        console.log(this.$route.query.id)
        let {id}=this.$route.query
        Axios.post(global.globalData.api+'/shop/goods/detail?id='+id).then(res=>{
          console.log(res.data.data)
          this.detaillist=res.data.data
          if(this.detaillist.basicInfo.kanjia===true){
            this.flage='kanjia'
          }
            else if(this.detaillist.basicInfo.pingtuan===true){
            this.flage='pintuan'
           }

           console.log(res.data.data.properties[0].childsCurGoods)
        })
      },
      xiadan(){
        // alert('lsdklds')
        // let sku=this.detaillist.properties
        // for(var i of sku){
        //   this.bigname=i.name
        //   console.log(this.bigname)
        //   for(var s of i.childsCurGoods){
        //     this.smallname=s.name
        //   }
        // }
        // let params = new URLSearchParams();
        // params.append("goodsId",'2222');
        // params.append("propertyChildIds",this.bigname+':'+this.smallname)
        // Axios.post(global.globalData.api+'/shop/goods/price',params).then(res=>{
        //   console.log(res)
        // })
      },

      jieshao(){
        this.code=true
      },
      pingjia(){
        this.code=false
      },
      //点击原价购买出现模态框
      yuanjiagoumai(){
        $('.modal').fadeIn()
      },
      Close(){
        $('.modal').fadeOut()
      },
      add(){
        this.$store.commit('add')
      },
      jian(){
        this.$store.commit('jian')
      }
    },


      mounted(){
        var mySwiper = new Swiper ('.swiper-container',{
          autoplay:{ delay:1000  },
          loop:true,
          pagination:{
            el:".swiper-pagination",
            clickable:true,
          },
          observer:true,                           //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,                  //修改swiper的父元素时，自动初始化swiper
        })
        this.getdetaillist()

      },
    components:{
      kanjiadetail,
      pintuandetail,
      goumaidetail
    }
    }
</script>

<style scoped>

</style>
