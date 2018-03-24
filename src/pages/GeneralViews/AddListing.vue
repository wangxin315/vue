<template>
  <div>
      <h1>Add a car</h1>
        <div>
    <div class="row d-flex justify-content-center">
      <div class="col-sm-8">
        <div class="card card-wizard" id="wizardCard">
          <form-wizard shape="tab" 
                      title="Sell your car"
                      subtitle="Step by step"
                       @on-complete="wizardComplete"
                       error-color="#FB404B"
                       color="#35495E">
            <tab-content title="Step 1"
                         class="col-12"
                       
                         icon="nc-icon nc-badge">
              <first-step ref="firstStep" @on-validated="onStepValidated"></first-step>
            </tab-content>

            <tab-content title="Step 2"
                         class="col-12"
                       
                         icon="nc-icon nc-notes">
              <second-step ref="secondStep" @on-validated="onStepValidated"></second-step>
            </tab-content>

                 <tab-content title="Step 3"
                         class="col-12"
                         
                         icon="nc-icon nc-notes">
              <third-step ref="thirdStep" @on-validated="onStepValidated"></third-step>
            </tab-content>

             <tab-content title="Step 4"
                         class="col-12"
                         
                         icon="nc-icon nc-notes">
              <fourth-step ref="fourthStep" @on-validated="onStepValidated"></fourth-step>
            </tab-content>

             <tab-content title="Step 5"
                         class="col-12"
                         
                         icon="nc-icon nc-notes">
              <fifth-step ref="fifthStep" @on-validated="onStepValidated"></fifth-step>
            </tab-content>

            <tab-content title="Last step"
                         class="col-12"
                         icon="nc-icon nc-check-2">
              <div>
                <h2 class="text-center text-space">Yuhuuu!
                  <br>
                  <small>Click on "<b>Finish</b>" to join our community</small>
                </h2>
              </div>

            </tab-content>

            <button slot="prev" class="btn btn-default btn-fill btn-wd btn-back">Back</button>
            <button slot="next" class="btn btn-default btn-fill btn-wd btn-next">Next</button>
            <button slot="finish" class="btn btn-success btn-fill btn-wd">Finish</button>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
  import AuthLayout from 'src/pages/Dashboard/Pages/AuthLayout.vue'
  import {
    FormWizard,
    TabContent
  } from 'vue-form-wizard'
  import 'src/assets/wizard/vue-form-wizard.min.css'
  import FirstStep from 'src/pages/Dashboard/Forms/Wizard/AddFirstStep.vue'
  import SecondStep from 'src/pages/Dashboard/Forms/Wizard/AddSecondStep.vue'
  import ThirdStep from 'src/pages/Dashboard/Forms/Wizard/AddThirdStep.vue'
  import FourthStep from 'src/pages/Dashboard/Forms/Wizard/AddFourthStep.vue'
  import FifthStep from 'src/pages/Dashboard/Forms/Wizard/AddFifthStep.vue'
  import swal from 'sweetalert2'

  export default {
  
    data () {
      return {
        wizardModel: {}
      }
    },
    components: {
      AuthLayout,
      FormWizard,
      TabContent,
      FirstStep,
      SecondStep,
      ThirdStep,
      FourthStep,
      FifthStep
    },
    methods: {
      validateStep (ref) {
        return this.$refs[ref].validate()
      },
      onStepValidated (validated, model) {
        this.wizardModel = {...this.wizardModel, ...model}
      },
      wizardComplete () {
        swal('Good job!', 'You clicked the finish button!', 'success')
      }
    }
  }
  
</script>
<style lang="scss">
  .vue-form-wizard .wizard-icon-circle.tab_shape {
    background-color: #9A9A9A !important;
    color: white;
  }
  .vue-form-wizard .wizard-tab-content {
    display: flex; // to avoid horizontal scroll when animating
    .wizard-tab-container {
      display: block;
      animation: fadeIn 0.5s;
    }
  }
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