<template>
  <div>
      <h1>Add a car</h1>
 </div>
</template>

<script>
  import AuthLayout from 'src/pages/Dashboard/Pages/AuthLayout.vue'

  export default {
    components: {
      AuthLayout
    }
  }
</script>
<style lang="scss">
  .not-found-page {
    .full-page > .content,
    .centered {
      min-height: calc(100vh - 160px);
    }
    .not-found-icon {
      margin-right: 10px;
    }
    .centered {
      h1, i {
        font-size: 50px;
      }
      p {
        font-size: 20px;
      }
      display: flex;
      padding-bottom: 150px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

</style>
