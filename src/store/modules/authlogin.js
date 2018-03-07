/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import routes from '../../routes/routes'
import VueRouter from 'vue-router';

import * as firebase from 'firebase'
Vue.use(Vuex)

const router = new VueRouter({ routes, linkActiveClass: 'nav-item active' });

const state = {
  idToken: null,
  userId: null,
  user: null
};

const mutations = {
  authUser(state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  storeUser(state, user) {
    state.user = user
  },
  clearAuthData(state) {
    state.idToken = null
    state.userId = null
  }
};

const actions = {
  setLogoutTimer({ commit }, expirationTime) {
    setTimeout(() => {
      commit('clearAuthData')
    }, expirationTime * 1000)
  },
  signup({ commit, dispatch }, authData) {
    axios.post('/signupNewUser?key=AIzaSyBvOXNbRQQUaXrhcTOhnjLg14SwX0geqL8', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
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
  login({ commit, dispatch }, authData) {
    axios.post('/verifyPassword?key=AIzaSyBvOXNbRQQUaXrhcTOhnjLg14SwX0geqL8', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('setLogoutTimer', res.data.expiresIn)
        // router.push('/admin/user');
        window.location.href = '#/admin/user';
      })
      .catch(error => console.log(error))
  },
  phone_login({ commit, dispatch }) {
    console.log('phone login clicked');
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    });
    var phoneNumber = getPhoneNumberFromUserInput();
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        console.log(confirmationResult);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      }).catch(function (error) {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  },
  google_login({ commit, dispatch }) {
    console.log('google login clicked');
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result);
      localStorage.setItem('token', result.credential.idToken)
      localStorage.setItem('userId', result.user.uid)
      localStorage.setItem('expirationDate', 3600)
      commit('authUser', {
        token: result.credential.idToken,
        userId: result.user.uid
      })
      dispatch('setLogoutTimer', 3600)
      window.location.href = '#/admin/user';

      // ...
    }).catch(function (error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
    });
  },
  tryAutoLogin({ commit }) {
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
  logout({ commit }) {
    commit('clearAuthData')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    firebase.auth().signOut().then(function () {
      console.log('signout')
  }).catch(function (error) {
      console.log(error);
    });
    window.location.href = '#/admin/signin';
  },
  storeUser({ commit, state }, userData) {
    if (!state.idToken) {
      return
    }
    globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },
  fetchUser({ commit, state }) {
    if (!state.idToken) {
      return
    }
    globalAxios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        commit('storeUser', users[0])
      })
      .catch(error => console.log(error))
  }
};

const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.idToken !== null
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};

