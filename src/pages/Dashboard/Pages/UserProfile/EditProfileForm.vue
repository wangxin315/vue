<template>
  <card>
    <div slot="header">
      <h4 class="title">Edit Profile</h4>
      <p>Current User :  {{ email }}</p>
    </div>
    <div>
      <form>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Company"
                                           
                      v-model="user.company" :placeholder="company">
            </fg-input>
          </div>
          <div class="col-md-3">

         
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      label="Email"
                      :disabled="true"
                      v-model="user.email" :placeholder="email">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="First Name"
                      
                      v-model="user.firstName" :placeholder="firstName">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Last Name"
                      
                      v-model="user.lastName" :placeholder="lastName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Address"
                    
                      v-model="user.address" :placeholder="address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      
                      v-model="user.city" :placeholder="city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                     
                      v-model="user.country" :placeholder="country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Postal Code"
                      
                      v-model="user.postalCode" :placeholder="postalCode">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input label="About Me">
              <el-input type="textarea"
                        autosize
                        
                        v-model="user.aboutMe" :placeholder="aboutMe">
              </el-input>
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Update Profile
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>

import axios from 'axios'

  export default {
    data () {
      return {
        
        user: {
         
          company: '',
          email: '',
          lastName: '',
          firstName:'',
          address: '',
          city: '',
          country: '',
          postalCode: '',
          aboutMe: ``
        }
      }
    },
    computed: {
        email () {
          return !this.$store.getters.user ? false : this.$store.getters.user.email
            return this.$store.getters.user.email
          },
           company () {
          return !this.$store.getters.user ? false : this.$store.getters.user.company
            return this.$store.getters.user.company
          },
        
             lastName () {
          return !this.$store.getters.user ? false : this.$store.getters.user.lastName
            return this.$store.getters.user.lastName
          },
             firstName () {
          return !this.$store.getters.user ? false : this.$store.getters.user.firstName
            return this.$store.getters.user.firstName
          },
             address () {
          return !this.$store.getters.user ? false : this.$store.getters.user.address
            return this.$store.getters.user.address
          },
              city () {
          return !this.$store.getters.user ? false : this.$store.getters.user.city
            return this.$store.getters.user.city
          },
               country () {
          return !this.$store.getters.user ? false : this.$store.getters.user.country
            return this.$store.getters.user.country
          },
                 postalCode () {
          return !this.$store.getters.user ? false : this.$store.getters.user.postalCode
            return this.$store.getters.user.postalCode
          },
                  aboutMe () {
          return !this.$store.getters.user ? false : this.$store.getters.user.aboutMe
            return this.$store.getters.user.aboutMe
          }
    },

    created () {
      this.$store.dispatch('fetchUser')
 
    },


    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user)
        
        ) 
      },
      /*  onSubmit () {
      const userData = {
          
          company: this.company,
          lastName: this.lastName,
          firstName: this.firstName,
          address: this.address,
          city: this.city,
          country: this.country,
          postalCode: this.postalCode,
          aboutMe: this.aboutMe
        }
        console.log(userData)
      axios.post('/users.json', userData)
      .then(res => console.log(res))
        .catch(error => console.log(error)
           
    },  */
          },
        
  }

</script>
<style>

</style>
