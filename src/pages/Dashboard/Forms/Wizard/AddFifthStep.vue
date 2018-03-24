<template>
  <div>
    <h5 class="text-Left">Publish Options</h5>
    <div class="row">
      <div class="col-12">
      </div>
      
    </div>
  </div>
</template>
<script>
  import { mapFields } from 'vee-validate'
  import { Select, Option } from 'element-ui'

  export default {
    components: {
      [Select.name]: Select,
      [Option.name]: Option
    },
    computed: {
      ...mapFields(['website', 'language', 'bootstrapVersion'])
    },
    data () {
      return {
  
      }
    },
    methods: {

    }
  }
</script>
<style>
</style>
