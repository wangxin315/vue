import Vue from 'vue'
import "babel-polyfill";
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import store from './store/store'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)


import * as firebase from 'firebase'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  //mode: 'history',
 
})

axios.defaults.baseURL = 'https://troove-168621.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBvOXNbRQQUaXrhcTOhnjLg14SwX0geqL8",
      authDomain: "troove-168621.firebaseapp.com",
      databaseURL: "https://troove-168621.firebaseio.com",
      projectId: "troove-168621",
      storageBucket: "troove-168621.appspot.com",
      messagingSenderId: "353784165861"
    })
  }
})
