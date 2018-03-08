<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-if="!auth" to="/admin/signin">
        <i class="nc-icon nc-button-power"></i>
        <p>Sign in</p>
      </sidebar-link>
      <sidebar-link v-if="!auth" to="/admin/signup">
        <i class="nc-icon nc-notes"></i>
        <p>Sign up</p>
      </sidebar-link> 
      <hr>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/addlisting">
        <i class="nc-icon nc-bus-front-12"></i>
        <p>Add a Car</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
     
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
       onLogout() {
        this.$store.dispatch('logout')
      },
    },
    computed: {
         auth () {
        return this.$store.getters.isAuthenticated
      },
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    }
  }

</script>
