import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid:sessionStorage.getItem('userid'),
    SearchInfo: {
      user: "",
      name: "",
      region: "",
      date: "",
      pass: ""
    }, //搜索数据
  },
  mutations: {
    //保存userID
    SETUSERID(state, userid) {
      state.userid = userid;
      sessionStorage.setItem('userid', userid);
    },
    //重置SearchInfo
    CLEANSEARCHINFO(state) {
      state.SearchInfo={
        user: "",
        name: "",
        region: "",
        date: "",
        pass: ""
      } ;
    },
  },
  actions: {
  },
  modules: {
  }
})
