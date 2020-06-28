import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const baseUrl = 'https://us-central1-livecoding-72eda.cloudfunctions.net/courses/courses'
export default new Vuex.Store({
  state: {
    courses:[],
    overlay: false,
    data:{
      name: '',
      img:'',
      description:''
    }
  },
  mutations: {
    SET_COURSES(state, data) { state.courses = data },
    DISPLAY_OVERLAY(state) { state.overlay = true },
    HIDE_OVERLAY(state) { state.overlay = false },
  },
  actions: {
    setCourses({ commit }){
      commit('DISPLAY_OVERLAY')
      axios.get(`${baseUrl}`)
      .then((response)=>{
        commit('SET_COURSES', response.data)
      })
      .finally(()=>{
        commit('HIDE_OVERLAY')
      })
    }
  },
  modules: {
  }
})
