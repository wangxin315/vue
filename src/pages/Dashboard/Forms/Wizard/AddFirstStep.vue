<template>
  <div>
    <h5 class="text-Left">Find your car</h5>
    <div class="row">
      
            <div class="col-md-4">
                <span>Make:</span><br>
                  <select v-model="selectedMake">
                            <option v-for="make in makes" :value="make.indexName" :key="make">{{ make.name }}</option>
                        </select>
            </div>
            <div class="col-md-4">
                <span>Model:</span><br>
                 <select v-model="selectedModel" v-if="selectedMake != null">
                            <option v-for="(model, index) in makes[selectedMake].models" :value="index" :key="model">{{ model.modelName }}</option>
                        </select>
            </div>
            <div class="col-md-4">
                <span>Year:</span><br>
                <select v-model="selectedYear" v-if="selectedModel != null">
                            <option v-for="year in makes[selectedMake].models[selectedModel].years" :key="year">{{ year }}</option>
                        </select>
            </div> 
      

         </div> 
  
  </div>
</template>
<script>
const data = require('src/assets/CarMakeYear.json')
export default {
  data: function () {
    return {
      makes: data,
      selectedMake: 'ac',
      selectedModel: null,
      selectedYear: null
    }
  },
  computed: {
    make: function () {
      return this.selectedMake
    },
    model: function () {
      return this.makes[this.selectedMake].models[this.selectedModel].modelName
    },
    year: function () {
      return this.selectedYear
    }
  },
  mounted () {
    console.log(this.makes[this.selectedMake])
  }
}
</script>
<style>
</style>
