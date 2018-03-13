import DashboardLayout from 'src/pages/Dashboard/Layout/DashboardLayout.vue'
import IndexLayout from 'src/pages/Dashboard/Layout/IndexLayout.vue'
// GeneralViews
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/pages/Dashboard/Dashboard/Overview.vue'
import Stats from 'src/pages/Dashboard/Dashboard/Stats.vue'

//login
import signin from 'src/pages/LoginModule/signin.vue'
import signup from 'src/pages/LoginModule/signup.vue'

//home
import AddListing from 'src/pages/GeneralViews/AddListing.vue'
import CarExtendSearch from 'src/pages/GeneralViews/CarExtendSearch.vue'
import index from 'src/pages/GeneralViews/index.vue'
import About from 'src/pages/GeneralViews/About.vue'
import Agreement from 'src/pages/GeneralViews/Agreement.vue'
import ContactUs from 'src/pages/GeneralViews/ContactUs.vue'

// Dealer
import DealerProfile from 'src/pages/DealerViews/DealerProfile.vue'

// Pages
import User from 'src/pages/Dashboard/Pages/UserProfile.vue'
import TimeLine from 'src/pages/Dashboard/Pages/TimeLinePage.vue'
import Login from 'src/pages/Dashboard/Pages/Login.vue'
import Register from 'src/pages/Dashboard/Pages/Register.vue'
import Lock from 'src/pages/Dashboard/Pages/Lock.vue'

// Components pages
import Buttons from 'src/pages/Dashboard/Components/Buttons.vue'
import GridSystem from 'src/pages/Dashboard/Components/GridSystem.vue'
import Panels from 'src/pages/Dashboard/Components/Panels.vue'
const SweetAlert = () => import('src/pages/Dashboard/Components/SweetAlert.vue')
import Notifications from 'src/pages/Dashboard/Components/Notifications.vue'
import Icons from 'src/pages/Dashboard/Components/Icons.vue'
import Typography from 'src/pages/Dashboard/Components/Typography.vue'

// Forms pages
const RegularForms = () => import('src/pages/Dashboard/Forms/RegularForms.vue')
const ExtendedForms = () => import('src/pages/Dashboard/Forms/ExtendedForms.vue')
const ValidationForms = () => import('src/pages/Dashboard/Forms/ValidationForms.vue')
const Wizard = () => import('src/pages/Dashboard/Forms/Wizard.vue')

// TableList pages
const RegularTables = () => import('src/pages/Dashboard/Tables/RegularTables.vue')
const ExtendedTables = () => import('src/pages/Dashboard/Tables/ExtendedTables.vue')
const PaginatedTables = () => import('src/pages/Dashboard/Tables/PaginatedTables.vue')
// Maps pages
const GoogleMaps = () => import('src/pages/Dashboard/Maps/GoogleMaps.vue')
const FullScreenMap = () => import('src/pages/Dashboard/Maps/FullScreenMap.vue')
const VectorMaps = () => import('src/pages/Dashboard/Maps/VectorMapsPage.vue')

// Calendar
const Calendar = () => import('src/pages/Dashboard/Calendar/CalendarRoute.vue')
// Charts
const Charts = () => import('src/pages/Dashboard/Charts.vue')


let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }

  ]
}
let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: RegularForms
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: ExtendedForms
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: ValidationForms
    },
    {
      path: 'wizard',
      name: 'Wizard',
      component: Wizard
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: ExtendedTables
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      component: PaginatedTables
    }]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: FullScreenMap
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: VectorMaps
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}

 let AddListingPage = {
   path: '/addlisting',
   name: 'Addlisting',
  component: AddListing
 }

let signupPage = {
  path: '/signup',
  name: 'signup',
  component: signup
}

let signinPage = {
  path: '/signin',
  name: 'signin',
  component: signin
}

let indexPage = {
  path: '/index',
  name: 'index',
  component: index
}

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
   
  {
    path: '/home',
    component: IndexLayout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'indexPage',
        component: index
      },
      {
        path: '/about',
        name: 'AboutPage',
        component: About
      },
      {
        path: '/carextendearch',
        name: 'CarExtendSearchPage',
        component: CarExtendSearch
      },
      {
        path: '/agreement',
        name: 'AgreementPage',
        component: Agreement
      },
      {
        path: '/contactus',
        name: 'ContactUsPage',
        component: ContactUs
      },
      {
        path: 'signin',
        name: 'signinPage',
        component: signin
      },
      {
        path: 'signup',
        name: 'signupPage',
        component: signup
      }
    
    ]},
  
  
  {
    path: '/admin',
    redirect: '/admin/overview'
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  AddListingPage,
//  signinPage,
//  signupPage,


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
        path: 'stats',
        name: 'Stats',
        component: Stats
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'dealerprofile',
        name: 'DealerprofilePage',
        component: DealerProfile
      },
      {
        path: 'addlisting',
        name: 'AddListingPage',
        component: AddListing
      }
    ]
  },
  {path: '*', redirect: '/' }
]

export default routes
