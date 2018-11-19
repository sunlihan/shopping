import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let store=new Vuex.Store({
  state:{
    datalist:[],            //首页数据
    classifydata:[],       //分类数据
    num:1,
    usermess:{},
    sku:{},
    defaultadd:{},        //默认地址
    orderlist:{},         //订单列表
    },
  getters:{
    // 砍价数据
    kanjialist(state){
      return state.datalist.filter(item=>{
        return item.kanjia===true
      })
    },
    //人气推荐
    tuijianlist(state){
      return state.datalist.filter(item=>{
        return item.recommendStatusStr==='推荐'
      })
    },
    //分类左边
    leftclassify(state){
      return state.classifydata.filter(item=>{
        return item.level===1
      })
    },
    //分类右边
    rightclassify(state){
      return state.classifydata.filter(item=>{
        return item.level===2
      })
    },
    //已关闭
    // guanbilist(state){
    //   return state.orderlist.orderList.filter(item=>{
    //     return item.status===-1
    //   })
    // },
    // //待付款
    // daifukuanlist(state){
    //   return state.orderlist.orderList.filter(item=>{
    //     return item.status===0
    //   })
    // },
    // //待发货
    // daifahuolist(state){
    //   return state.orderlist.orderList.filter(item=>{
    //     return item.status===1
    //   })
    // },
    // //待收货
    // daishouhuolist(state){
    //   return state.orderlist.orderList.filter(item=>{
    //     return item.status===2
    //   })
    // },
    // //待评价
    // daipingjialist(state){
    //   return state.orderlist.orderList.filter(item=>{
    //     return item.status===3
    //   })
    // },
    // //已完成
    // yiwancheng(state){
    //   return state.orderlist.orderList.filter(item=>{
    //     return item.status===4
    //   })
    // }
  },
  mutations:{
    // 得到首页的全部数据
    list(state,data){
      state.datalist=data
      console.log(state.datalist)
    },
    //得到分类的数据
    classifylist(state,data){
      state.classifydata=data
      console.log(state.classifydata)
    },
    add(state){
      state.num++
    },
    jian(state){
      if(state.num<=1){
        return false
      }else {
        state.num--
      }
    },
    usermess(state,data){
      state.usermess=data
    },
    //选择sku返回数据
    sku(state,data){
      state.sku=data
    },
    //默认地址
    morenadd(state,data){
      state.defaultadd=data
    },
    //所有订单列表
    mainorder(state,data){
      state.orderlist=data
    }

  }

})
export default store
