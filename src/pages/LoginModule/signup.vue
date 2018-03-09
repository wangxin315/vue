<template>
 <div class="content">
    <div class="container-fluid">
<card>
  <div class="col-md-6">
    <div>
<div>
    <h2 slot="header" class="card-title">Sign Up</h2>
          <br>
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
<div class="row">
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
        <hr>
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
  </div>
  </card>
    </div>
 </div>
</template>

<script>
import Card from "src/components/Cards/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      terms: false
    };
  },
  methods: {
    onSubmit() {
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
      };
      console.log(formData);
      this.$store.dispatch("signup", formData);
    }
  }
};
</script>

<style scoped>
.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #2c55ac;
  background-color: #eee;
}

.submit button {
  border: 1px solid #2c55ac;
  color: #2c55ac;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #2c55ac;
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