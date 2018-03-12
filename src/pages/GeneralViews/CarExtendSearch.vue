<template>
  <div class="row">
    <div class="col-md-12">
      <el-collapse>
        <el-collapse-item title="Search for a vehicule" name="1" class="headersearch">
          <div>
            <card>

              <card>
                <template slot="header">
                  <h4 class="card-title headersearchleft">Form Elements</h4>
                </template>
                <div class="headersearchleft">
                  <form method="get" action="/" class="form-horizontal">
                    <fg-input label="With help" type="text" placeholder="Enter email">
                      <small class="form-text text-muted" slot="helpBlock">A block of help text that breaks onto a new line.</small>
                    </fg-input>
                  </form>
                </div>
              </card>
            </card>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Collapse, CollapseItem } from 'element-ui'
  import VueTabs from 'vue-nav-tabs'
  import { Checkbox, Radio } from 'src/components/index'
  import {DropDown} from 'src/components'

  Vue.use(VueTabs)
  export default {
    
    components: {
      DropDown,
      Checkbox,
      Radio,
      [Collapse.name]: Collapse,
      [CollapseItem.name]: CollapseItem},
      
    data () {
      return {
        activeName: 'first',
        radios: {
          radio1: '1',
          radio2: '2',
          radio3: '2'
        },
        checkboxes: {
          first: false,
          second: false,
          a: false,
          b: false,
          c: false,
          unchecked: false,
          checked: true,
          disabledUnchecked: false,
          disabledChecked: true
        }
      
      }
    }
  }
</script>
<style lang="scss">
  // css transition for tabs
  .vue-tabs .tab-content {
    padding-top: 10px;
    min-height: 100px;
    display: flex; // to avoid horizontal scroll when animating
    .tab-container {
      display: block;
      animation: fadeIn 0.5s;
    }
  }
</style>

