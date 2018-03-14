/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import usersInfo from './modules/usersInfo';
import authlogin from './modules/authlogin';
import orders from './modules/orders';
import users from './modules/users';
import { firebaseMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: { ...firebaseMutations },
  modules: {
    usersInfo,
    orders,
    users,
    authlogin
  }
});
