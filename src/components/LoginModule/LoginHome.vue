<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
      <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="email">Your email address: {{ email }}</p>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
   import axios from 'axios';
   
  export default {
    email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
     console.log(email) },
    
    created () {
      this.$store.dispatch('fetchUser')
    }
    }
</script>
<style>

</style>
