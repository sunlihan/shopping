<template>
  <div class="detail">
    <div class="detail-div">
      <!--轮播图-->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in detaillist.pics" :key="index"><img :src="item.pic" alt="">
          </li>
        </ul>
        <div class="swiper-pagination"></div>
      </div>

      <!--商品详情-->
      <!--砍价-->
      <div v-if="flage==='kanjia'">
        <kanjiadetail :kanjiabasicInfo='detaillist.basicInfo'></kanjiadetail>
      </div>
      <!--拼团-->
      <div v-if="flage==='pintuan'">
        <pintuandetail :pintuanbasicInfo='detaillist.basicInfo'></pintuandetail>
      </div>
      <!--购买-->
      <div v-if="flage==='goumai'">
        <goumaidetail :goumaibasicInfo='detaillist.basicInfo'></goumaidetail>
      </div>

      <p class="kongyu"></p>
      <!--选择规格和版本-->
      <a class="checkguige" v-if="flage!='kanjia'" @click='yuanjiagoumai()'>
        <span>选择规格：选择版本</span>
        <span class="iconfont icon-arrow-right-copy-copy"></span>
      </a>
      <p class="kongyu" v-if="flage!='kanjia'"></p>

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
      <router-link to="/" class="detail-foot-kanjia" v-if="flage==='kanjia'">
        立即发起砍价，最低可砍到{{detaillist.basicInfo.kanjiaPrice}}元
      </router-link>
      <!--购买-->
      <ul class="detail-foot-goumai" v-if="flage==='goumai'">
        <li><a href="#" class="iconfont icon-kefu"></a></li>
        <li><a href="#" class="iconfont icon-gouwuchekong"></a><span>0</span></li>
        <li>
          <span class="iconfont icon-unie601" v-show="!shoucang" @click="Shoucang(true)"></span>
          <span class="iconfont icon-shoucang" v-show="shoucang" @click="Shoucang(false)"></span>
        </li>
        <li @click="yuanjiagoumai()"><a href="#">立即购买</a></li>
        <li><a href="#">加入购物车</a></li>
      </ul>
      <!--拼团-->
      <ul class="detail-foot-pintuan" v-if="flage==='pintuan'">
        <li><a href="#" class="iconfont icon-kefu"></a></li>
        <li>
          <span class="iconfont icon-unie601" v-show="!shoucang" @click="Shoucang(true)"></span>
          <span class="iconfont icon-shoucang" v-show="shoucang" @click="Shoucang(false)"></span>
        </li>
        <li @click="yuanjiagoumai()"><a href="#"><span>￥{{detaillist.basicInfo.originalPrice}}</span>
          <p>原价购买</p></a></li>
        <li><a href="#"><span>￥{{detaillist.basicInfo.pingtuanPrice}}</span>
          <p>一键开团</p></a></li>
      </ul>
    </div>
    <!--模态框-->
    <div class="modal" v-if="flage==='goumai'||flage==='pintuan'">
      <div class="modal-cont">
        <ul class="modal-cont-topic">
          <li><img :src="detaillist.basicInfo.pic" alt=""></li>
          <li>
            <p>{{detaillist.basicInfo.name}}</p>
            <p>￥{{detaillist.basicInfo.originalPrice}}</p>
          </li>
          <li @click="Close()"><span class="iconfont icon-guanbi"></span></li>
        </ul>
        <ul class="modal-cont-leixing">
          <li v-for="(item,index) in detaillist.properties">
            <span>{{item.name}}</span>
            <p>
              <span v-for="(aa,index) in item.childsCurGoods" @click="sku2(aa,item)" :style="{marginBottom:'10px'}">{{aa.name}}</span>
            </p>
           </li>
          <!--<li>-->
            <!--<span>选择服务</span>-->
            <!--<p><span>授权版（加密版本）</span><span>开发版（未加农牧民）</span></p>-->
          <!--</li>-->
        </ul>
        <ul class="modal-cont-num">
          <li>购买数量</li>
          <li>
            <button @click="jian()">-</button>
            <span>{{num}}</span>
            <button @click="add()">+</button>
          </li>
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
    data() {
      return {
        detaillist: {},
        code: true,
        flage: '',
        guige: {},
        bigname: '',
        smallname: '',
        kanjialist: {},
        pintuanlist: {},
        bigid: '',
        smallid: '',
        shoucang: false
      }
    },
    computed: {
      num() {
        return this.$store.state.num
      }
    },

    methods: {
      Shoucang(m) {
        this.shoucang = m
      },
      getdetaillist() {
        console.log(this.$route.query.id)
        let {id} = this.$route.query
        Axios.post(global.globalData.api + '/shop/goods/detail?id=' + id).then(res => {
          console.log(res.data.data)
          this.detaillist = res.data.data
          if (this.detaillist.basicInfo.kanjia === true) {
            this.flage = 'kanjia'
          }
          else if (this.detaillist.basicInfo.pingtuan === true) {
            this.flage = 'pintuan'
          }
          else {
            this.flage = 'goumai'
          }
          console.log(res.data.data.properties[0].childsCurGoods)
        })
      },
        sku2(aa,item) {
        this.bigid = item.id
        this.bigname = item.name
        console.log(this.bigname,this.bigid)
        this.smallname = aa.name
        this.smallid = aa.id
        console.log(this.smallname,this.smallid)
      },
      sku() {
        let {id} = this.$route.query
        let params = new URLSearchParams();
        params.append("goodsId", id);
        params.append("propertyChildIds", this.bigid + ':' + this.smallid)
        Axios.post(global.globalData.api + '/shop/goods/price', params).then(res => {
          console.log(res)
          this.$store.commit('sku', res.data.data)
        })
      },
      xiadan() {
        if (!this.smallname) {
          alert("请选择")
        } else {
          this.sku()
          this.$router.push({
            path: '/sureorder',
            query: {
              dataname: this.detaillist.basicInfo.name,
              datanum: this.num,
              datapic: this.detaillist.basicInfo.pic,
              databig: this.bigname,
              datasmall: this.smallname,
              dataprice: this.detaillist.basicInfo.originalPrice,
              dataid:this.detaillist.basicInfo.id
            }
          })
        }

      },

      jieshao() {
        this.code = true
      },
      pingjia() {
        this.code = false
      },
      //点击原价购买出现模态框
      yuanjiagoumai() {
        $('.modal').fadeIn()
      },
      Close() {
        $('.modal').fadeOut()
      },
      add() {
        this.$store.commit('add')
      },
      jian() {
        this.$store.commit('jian')
      }
    },


    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: {delay: 1000},
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        observer: true,                           //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,                  //修改swiper的父元素时，自动初始化swiper
      })
      this.getdetaillist(),
        this.sku()

    },
    components: {
      kanjiadetail,
      pintuandetail,
      goumaidetail
    }
  }
</script>

<style scoped>

</style>
