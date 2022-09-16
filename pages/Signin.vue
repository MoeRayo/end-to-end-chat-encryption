<template>
  <div class="ba b--light-blue bw3 vh-100 pv5 ph2 athelas">
    <form @submit.prevent="signIn" class="bg-lightest-blue br2 mw6 w-40-m w-70 w-20-l center pa3 shadow-5 ">
      <h2 class="ttc tc">Sign In</h2>

      <label for="email" class="db mb1 black-70">Email</label>
      <input name="email" id="email" v-model="email" type="email" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="example@email.com">

      <label for="password" class="db mb1 black-70">Password</label>
      <input name="password" id="password" v-model="password" type="password" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="••••••••">

      <button type="submit" class="center db ph4 pv2 bg-navy ba br3 white pointer">Sign in</button>
      
    </form>    

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {account} from '~/init'

export default Vue.extend({
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    signIn: async function () {
      try{
        await account.createEmailSession(this.email, this.password)
          window.location.href = '/chat'
        alert("user signed in")
      } catch (e){
          console.log(e)
      }
    }
  }
  
})
</script>