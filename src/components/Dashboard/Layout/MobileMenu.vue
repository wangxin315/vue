<template>
<ul class="nav nav-mobile-menu">      
   <li class="nav-item" v-if="auth">
          <button @click="onLogout" class="nav-link logout rounded">Logout</button>
        </li>
</ul>
</template>
<script>
  import DropDown from 'src/components/UIComponents/Dropdown.vue'

  export default {
    components: {
      DropDown
    },
    computed: {
         auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
        onLogout() {
        this.$store.dispatch('logout')
      },
  }
  }
</script>
<style>
</style>
