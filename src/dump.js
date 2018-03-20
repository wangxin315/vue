import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'
Vue.use(Vuex)
 
const FIREBASE_API_KEY = '<< your api key here >>';
 
export default new Vuex.Store({
 state: {
 idToken: null,
 userId: null,
 loginEmail: '',
 loginPassword: '',
 user: null
 },
 mutations: {
 authUser (state, userData) {
 state.idToken = userData.token
 state.userId = userData.userId
 state.loginEmail = userData.loginEmail
 state.loginPassword = userData.loginPassword
 },
 storeUser (state, user) {
 state.user = user
 },
 clearAuthData (state) {
 state.idToken = null
 state.userId = null
 state.loginEmail = null
 state.loginPassword = null
 state.user = null
 }
 },
 actions: {
 setLogoutTimer ({commit}, expirationTime) {
 setTimeout(() => {
 commit('clearAuthData')
 }, expirationTime * 1000)
 },
 signup ({commit, dispatch}, authData) {
 axios.post('/signupNewUser?key=' + FIREBASE_API_KEY, {
 email: authData.email,
 password: authData.password,
 returnSecureToken: true
 })
 .then(res => {
 console.log(res)
 commit('authUser', {
 token: res.data.idToken,
 userId: res.data.localId,
 loginEmail: res.data.email,
 loginPassword: authData.password
 })
 const now = new Date()
 const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
 localStorage.setItem('token', res.data.idToken)
 localStorage.setItem('userId', res.data.localId)
 localStorage.setItem('expirationDate', expirationDate)
 dispatch('storeUser', authData)
 dispatch('setLogoutTimer', res.data.expiresIn)
 })
 .catch(error => console.log(error))
 },
 login ({commit, dispatch}, authData) {
 axios.post('/verifyPassword?key=' + FIREBASE_API_KEY, {
 email: authData.email,
 password: authData.password,
 returnSecureToken: true
 })
 .then(res => {
 console.log('resdata login', res.data)
 const now = new Date()
 const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
 localStorage.setItem('token', res.data.idToken)
 localStorage.setItem('userId', res.data.localId)
 localStorage.setItem('expirationDate', expirationDate)
 commit('authUser', {
 token: res.data.idToken,
 userId: res.data.localId,
 loginEmail: res.data.email,
 loginPassword: authData.password
 })
 dispatch('setLogoutTimer', res.data.expiresIn)
 })
 .catch(error => console.log(error))
 },
 tryAutoLogin ({commit}) {
 const token = localStorage.getItem('token')
 if (!token) {
 return
 }
 const expirationDate = localStorage.getItem('expirationDate')
 const now = new Date()
 if (now >= expirationDate) {
 return
 }
 const userId = localStorage.getItem('userId')
 commit('authUser', {
 token: token,
 userId: userId
 })
 },
 logout ({commit}) {
 commit('clearAuthData')
 localStorage.removeItem('expirationDate')
 localStorage.removeItem('token')
 localStorage.removeItem('userId')
 router.replace('/signin')
 },
 storeUser ({commit, state}, userData) {
 if (!state.idToken) {
 return
 }
 globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
 .then(res => console.log(res))
 .catch(error => console.log(error))
 },
 fetchUser ({commit, state}) {
 if (!state.idToken) {
 return
 }
 globalAxios.get('/users.json' + '?auth=' + state.idToken)
 .then(res => {
 console.log('res data', res.data)
 const data = res.data
 const users = []
 for (let key in data) {
 const user = data[key]
 user.id = key
 users.push(user)
 }
 
 const currUser = users.filter((user) => user.email === state.loginEmail && user.password === state.loginPassword);
 commit('storeUser', currUser[0])
 
 })
 .catch(error => console.log(error))
 }
 },
 getters: {
 user (state) {
 return state.user
 },
 isAuthenticated (state) {
 return state.idToken !== null
 }
 }
})