import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let store=new Vuex.Store({
  state:{
    datalist:[],            //首页数据
    classifydata:[],     //分类数据
    num:1,
    usermess:{},

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
    }
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
    }


  }

})
export default store
