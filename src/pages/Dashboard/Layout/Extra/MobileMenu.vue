<template>
<div class="centerme">
  <ul class="nav nav-mobile-menu mt-2">
   
    <li class="nav-item" v-if="auth">
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
