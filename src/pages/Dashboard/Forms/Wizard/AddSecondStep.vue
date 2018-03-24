<template>
  <div>
    <h5 class="text-left">Select Features</h5>
    <div class="row">
      <div class="col-4">
        <l-checkbox v-model="unchecked">Alloy Wheels</l-checkbox>
        <l-checkbox v-model="unchecked">Audio - MP3 Decoder</l-checkbox>
        <l-checkbox v-model="unchecked">Cargo Barrier</l-checkbox>
        <l-checkbox v-model="unchecked">CD Player</l-checkbox>
        <l-checkbox v-model="unchecked">Colour Display Screen - Front</l-checkbox>
        <l-checkbox v-model="unchecked">Colour Display Screen - Rear</l-checkbox>
        <l-checkbox v-model="unchecked">Cruise Control</l-checkbox>
        <l-checkbox v-model="unchecked">Central Locking</l-checkbox>
        <l-checkbox v-model="unchecked">Headlight Covers</l-checkbox>
      </div>
        <div class="col-4">
        <l-checkbox v-model="unchecked">Sunroof</l-checkbox>
        <l-checkbox v-model="unchecked">Fog Lamps - Front</l-checkbox>
        <l-checkbox v-model="unchecked">Tow Bar</l-checkbox>
        <l-checkbox v-model="unchecked">Leather Seats</l-checkbox>
        <l-checkbox v-model="unchecked">Electric Front Seats</l-checkbox>
        <l-checkbox v-model="unchecked">Alarm</l-checkbox>
        <l-checkbox v-model="unchecked">Carpet Mats</l-checkbox>
        <l-checkbox v-model="unchecked">Carpet Mats</l-checkbox>
        <l-checkbox v-model="unchecked">DVD Player</l-checkbox>
      </div>
        <div class="col-4">
        <l-checkbox v-model="unchecked">GPS</l-checkbox>
        <l-checkbox v-model="unchecked">Spoiler - Rear</l-checkbox>
        <l-checkbox v-model="unchecked">Tinted Windows</l-checkbox>
        <l-checkbox v-model="unchecked">Wheelchair Access</l-checkbox>
        <l-checkbox v-model="unchecked">Unchecked</l-checkbox>
        <l-checkbox v-model="unchecked">Unchecked</l-checkbox>
        <l-checkbox v-model="unchecked">Unchecked</l-checkbox>
        <l-checkbox v-model="unchecked">Unchecked</l-checkbox>
        <l-checkbox v-model="unchecked">Unchecked</l-checkbox>
      </div>

    </div>
  </div>
</template>
<script>
  import { mapFields } from 'vee-validate'
  import { Select, Option } from 'element-ui'
  import {Checkbox as LCheckbox} from 'src/components'

  export default {
    components: {
      
      LCheckbox
    },
    computed: {
      ...mapFields(['website', 'language', 'bootstrapVersion'])
    },
     data () {
        return {
          unchecked: false,
          checked: true
        }
      
    },
    methods: {
 
      
      
    }
  }
</script>
<style>
</style>
