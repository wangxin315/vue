<template>
  <div>
    <h5 class="text-left">Add Details</h5>
    <div class="row">
      <div class="col-6">
        <div>
          <fg-input placeholder="Enter Km"></fg-input>

          <drop-down tag="div" title="Exterior Color">
            <a class="dropdown-item">Black</a>
            <a class="dropdown-item">Blue</a>
            <a class="dropdown-item">Brown</a>
            <a class="dropdown-item">Green</a>
            <a class="dropdown-item">Grey</a>
            <a class="dropdown-item">Orange</a>
            <a class="dropdown-item">Pink</a>
            <a class="dropdown-item">Red</a>
            <a class="dropdown-item">Silver</a>
            <a class="dropdown-item">White</a>
            <a class="dropdown-item">Yellow</a>
          </drop-down>
        </div>
        <br>
        <br>
        <div style="background-color:lightblue" class="rounded pb-1 pl-3 pr-3">
          <p class="pt-2">Enter your expected price</p>
          <fg-input placeholder="Price $"></fg-input>
        </div>

      </div>

      <div class="col-6">
        <div>
          <fg-input placeholder="Enter Vehicle Registration Number"></fg-input>

          <drop-down tag="div" title="Interior Color">
            <a class="dropdown-item">Black</a>
            <a class="dropdown-item">Blue</a>
            <a class="dropdown-item">Brown</a>
            <a class="dropdown-item">Green</a>
            <a class="dropdown-item">Grey</a>
            <a class="dropdown-item">Orange</a>
            <a class="dropdown-item">Pink</a>
            <a class="dropdown-item">Red</a>
            <a class="dropdown-item">Silver</a>
            <a class="dropdown-item">White</a>
            <a class="dropdown-item">Yellow</a>
          </drop-down>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
 import {FormGroupInput as FgInput} from 'src/components'
 import {DropDown} from 'src/components'

  export default {
    components: {
     FgInput,
     DropDown
    },
    computed: {
      
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
