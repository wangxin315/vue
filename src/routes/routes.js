import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
//login
import LoginHome from 'src/components/LoginModule/LoginHome.vue'
import signin from 'src/components/LoginModule/signin.vue'
import signup from 'src/components/LoginModule/signup.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'



import store from '../store/store'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: '/admin/loginhome',
        name: 'LoginHome',
        component: LoginHome,
         beforeEnter: (to, from, next) => {
          alert('This area is for authorised users only, please login to continue.');
          if (store.state.idToken) {
            next({
              path: '/admin/loginhome',
              
            })
          } else {
            next({
              path: '/admin/signin'              
            })
          } 
        }
      },
      {
        path: 'signup',
        name: 'signup',
        component: signup
      },
      {
        path: 'signin',
        name: 'signin',
        component: signin
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
