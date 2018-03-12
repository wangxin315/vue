<template>
  
    <div class="content col-md-6">
      <div class="container-fluid">
        <card>
        <div>
          <h2 slot="header" class="card-title">Sign In</h2>
          <br>

          <p>Login with Google or your mobile phone.
          </p>
          <div class="row d-flex p-2">
            <div class="btn-toolbar">
            <div class="btn-group">
           <button @click="onGoogleLogin" alt="LoginGoogle" class="btn btn-social  btn-google">
                <i class="fa fa-google"></i> Google Login 
              </button> 
             
              <button @click="onPhoneLogin" alt="LoginPhone" class="btn btn-social  btn-linkedin">
                <i class="fa fa-mobile"></i> Mobile phone Login
              </button> 
            </div></div>
          </div>
          <br>
          <hr>
          <p @click='onEmailLogin'>Or use your email and password</p>
        </div>
        <div v-if='phone_login'>
                  <div id='recaptcha-container'></div>

          <div class="input">
            <label for="phone_number">Phone Number</label>
            <input type="number" id="phone" v-model="phone_number">
          </div>
          
          <button type='button' class='btn btn-primary btn-sm' @click="send_SMS">Send SMS Code</button>
        </div>

        <div v-if='phone_login'>         

          <div class="input">
            <label for="verify_code">Verify Code</label>
            <input type="number" id="code" v-model="verify_code">
          </div>
          
          <button type='button' class='btn btn-primary btn-sm' @click="verifyLoginCode">Verify Code</button>
        </div>

        <form @submit.prevent="onSubmit" v-if='email_login'>
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
import Card from "src/components/Cards/Card.vue";
import * as firebase from "firebase";

export default {
  components: {
    Card
  },
  data() {
    return {
      email: "",
      password: "",
      phone_number: "",
      verify_code:'',
      phone_login: false,
      email_login: true
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
    onEmailLogin() {
      this.phone_login = false;
      this.email_login = true;
    },
    onPhoneLogin() {
      this.phone_login = true;
      this.email_login = false;
      setTimeout(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible"
        }
      );
      window.recaptchaVerifier.render();
      }, 100);
      
    },
    send_SMS() {
      this.$store.dispatch("send_SMS", this.phone_number);
    },
    verifyLoginCode() {
      this.$store.dispatch('verify_code', this.verify_code)
    },
    onGoogleLogin() {
      this.$store.dispatch("google_login");
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