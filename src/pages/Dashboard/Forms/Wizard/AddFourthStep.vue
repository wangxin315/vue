<template>
  <div>
    <h5 class="text-left">Add Photos</h5>

    <div class="row">
      <div class="col-12">
        <card>
          <cloudinary-uppy></cloudinary-uppy>
        </card>
      </div>
    </div>
    <hr>
    <div>
      <h5>Add some comments about your car</h5>
      <p class="category" style="text-align: left">Enter here some impressive wording about your car to attract more buyers ineterest in your Ad listing. this will appear
        on the search results page as well.</p><br>
     
      <form action="post">
        <fg-input>
          <textarea class="form-control" placeholder="Here can be your nice text" rows="3"></textarea>
        </fg-input>
      </form>
    </div>



  </div>
</template>
<script>
//  import { mapFields } from 'vee-validate'
  import { Select, Option } from 'element-ui'
//  import {FormGroupInput as FgInput} from 'src/components'
  import CloudinaryUppy from 'src/components/CloudinaryUppy.vue'

  export default {
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
      CloudinaryUppy
    },
    computed: { },
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
