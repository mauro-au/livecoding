import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const baseUrl = 'https://us-central1-livecoding-72eda.cloudfunctions.net/courses/courses'
export default new Vuex.Store({
  state: {
    courses:[],
    data:{
      name: '',
      img:'',
      description:''
    }
  },
  mutations: {
    SET_COURSES(state, data) { state.courses = data},
  },
  actions: {
    setCourses({ commit }){
      axios.get(`${baseUrl}`)
      .then((response)=>{
        commit('SET_COURSES', response.data)
      })
    }
  },
  modules: {
  }
})
