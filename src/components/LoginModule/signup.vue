<template>
  <div id="signup">
    <div class="signup-form">
<div><h1>Signup</h1>
<p>Signup with Google or your mobile phone.
</p>
<div class="row">
    <div class="col">
     <input id="image" type="image" alt="Login" width="180"
    src="../../../static/img/btn_google_signin_light_pressed_web@2x.png" 
    >
    </div>
    <div class="col">
     <button type="button" class="btn btn-primary btn-sm">Mobile Phone Signup</button>
    </div>
  
    
</div>
<br>
<hr>
<p>Or create a account</p>
</div>


    
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">E-Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="firstName">First Name</label>
          <input
                  type="text"
                  id="firstName"
                  v-model.number="firstName">

                   <label for="lastName">Last Name</label>
          <input
                  type="text"
                  id="lastName"
                  v-model.number="lastName">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword">
        </div>
          <div class="input">
          <label for="phone">Phone Number</label>
          <input
                  type="text"
                  id="phone"
                  v-model="phone">
        </div>
        <div class="input">
          <label for="company">Company</label>
          <input
                  type="text"
                  id="company"
                  v-model="company">
        </div>
         <div class="input">
          <label for="address">Address</label>
          <input
                  type="text"
                  id="address"
                  v-model="address">
        </div>
         <div class="input">
          <label for="city">City</label>
          <input
                  type="text"
                  id="city"
                  v-model="city">
        </div>
         <div class="input">
          <label for="country">Country</label>
          <input
                  type="text"
                  id="country"
                  v-model="country">
        </div>
           <div class="input">
          <label for="postalCode">Postal Code</label>
          <input
                  type="text"
                  id="cipostalCodety"
                  v-model="postalCode">
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        phone: '',
         company: '',
          address: '',
          city: '',
          country: '',
          postalCode: '',
        terms: false
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          confirmPassword: this.confirmPassword,
          phone: this.phone,
          company: this.company,
          address: this.address,
          city: this.city,
          country: this.country,
          postalCode: this.postalCode,
          terms: this.terms
        }
        console.log(formData)
        this.$store.dispatch('signup', formData)
      }
    }
  }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>