<template>
<div>
  <ul class="nav nav-mobile-menu mt-2">

     
                   <drop-down tag="div">
            
    <i class="fa fa-globe"></i>
    <span class="text-danger"> Info</span>
    <b class="caret"></b>
  
            <li class="nav-item">
              <router-link :to="{ name: 'AboutPage' }">
                <a class="nav-link">About Us</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'ContactUsPage' }">
                <a class="nav-link">Contact Us</a>
              </router-link>
            </li>
            <li class="divider"></li>
            <li class="nav-item">
              <router-link :to="{ name: 'AgreementPage' }">
                <a class="nav-link">Legal Agreement</a>
              </router-link>
            </li>

          </drop-down>
          
   
    <li class="nav-item centerme" v-if="auth">
     <button @click="onLogout" type="button" class="btn btn-wd btn-sm btn-danger btn-outline">
                                <span class="btn-label">
                                    <i class="fa fa-times"></i>
                                </span>
                LogOut
              </button>
        </li>  

  </ul>
  </div>
</template>
<script>
  import DropDown from 'src/components/Dropdown.vue'

  export default {
    components: {
      DropDown
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
    methods: {
        onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
<style>
.centerme {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
