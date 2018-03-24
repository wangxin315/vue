<template>
  <div id="app">
    
    <vue-uppy-cloudinary
          preset=""
          cloudName="dsznn9wo1"
          @uploaded="uploaded"
        />
  </div>
</template>

<script>
  import VueUppyCloudinary from 'vue-uppy-cloudinary';
  import 'vue-uppy-cloudinary/dist/lib/vue-uppy-cloudinary.min.css'

  export default {
    components: {
      VueUppyCloudinary,
    },
    methods: {
      uploaded(data) {
        console.log(data);
      }
    },
  }
</script>