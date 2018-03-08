<template>
  
    <div class="content col-md-6">
      <div class="container-fluid">
        <card>
        <div>
          <h2 slot="header" class="card-title">Sign In</h2>
          <br>

          <p>Login with Google or your mobile phone.
          </p>
          <div class="row">
            <div class="col" @click="onGoogleLogin">
              <input id="image" type="image" alt="Login" width="180" src="../../../static/img/btn_google_signin_light_pressed_web@2x.png">
            </div>
            <div class="col" @click="onPhoneLogin">
              <button type="button" class="btn btn-primary btn-sm">Mobile Phone Signup</button>
            </div>


          </div>
          <br>
          <hr>
          <p>Or use your email and password</p>
        </div>

        <form @submit.prevent="onSubmit">
          <div class="input">
            <label for="email">Mail</label>
            <input type="email" id="email" v-model="email">
          </div>
          <div class="input">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password">
          </div>
          <div class="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
          </card>
      </div>
    </div>

</template>

<script>
import Card from 'src/components/UIComponents/Cards/Card.vue'

export default {
    components: {
      Card
    },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password
      });
    },
    onPhoneLogin() {
      this.$store.dispatch('phone_login')
    },
    onGoogleLogin() {
      this.$store.dispatch('google_login')
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