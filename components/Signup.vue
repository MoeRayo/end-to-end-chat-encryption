<template>
  <div class="ba b--light-blue bw3 vh-100 pv5 ph2 athelas">
    <form @submit.prevent="signUp" class="bg-lightest-blue br2 mw6 w-40-m w-70 w-20-l center pa3 shadow-5">

      <h2 class="ttc tc">Sign up</h2>

      <label for="name" class="db mb1 black-70">Name</label>
      <input name="name" id="name" type="text" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="John Doe" v-model="name">

      <label for="email" class="db mb1 black-70">Email</label>
      <input name="email" id="email" type="email" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="example@email.com" v-model="email">

      <label for="password" class="db mb1 black-70">Password</label>
      <input name="password" id="password" type="password" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="••••••••" v-model="password">

      <label for="confirm-password" class="db mb1 black-70">Confirm Password</label>
      <input name="confirm-password" id="confirm-password" type="password" class="db mb3 w-100 br3 pa2 ba bw2" v-model="confirmPassword" placeholder="••••••••">

      <button type="submit" class="center db ph4 pv2 bg-navy ba br3 white pointer">Sign up</button>
      
      <p>Already have an account? <a href="/signin" class="black-70 b">Sign in</a> </p>
    </form>    

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {account} from '~/init'

export default Vue.extend({
  data: () => ({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),
  methods: {
    signUp: async function(){
      if (this.password.length >= 8){
        if(this.password === this.confirmPassword) {
          try{
            await account.create('unique()', this.email, this.password, this.name)
            alert("account created successfully")

          } catch (e) {
            console.log(e)
          }
        } else {
          alert("password do not match")
        }
      } else {
        alert("password length should be up to 8 characters")
      }
    },
    signIn: async function (email: string, password: string) {
      try{
        await account.createEmailSession(email, password)
        alert("user sign in")
      } catch (e){
          console.log(e)
      }
    }
  }
  
})
</script>