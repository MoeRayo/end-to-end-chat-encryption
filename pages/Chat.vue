<template>
  <div class="ba b--light-blue bw3 vh-100 pv5 ph2 athelas">
    <div class="bg-lightest-blue br3 mw6 w-40-m w-70 w-20-l center pt3 shadow-5 ">

      <h2 class="near-black tc f3">Chat</h2>

      <div class="bg-white mt4 br-top pa3 vh-50 relative">

        <section v-for="databaseMessage in databaseMessages" :key="JSON.stringify(databaseMessage)">
          <p :class="databaseMessage ? ['bg-lightest-blue', 'pa2', 'mv2', 'br3', 'w-60', 'f7'] : ''">
            {{databaseMessage}}
          </p>
        </section>

        <form @submit.prevent="sendMessage" >
          <div class="flex justify-between items-center absolute bottom-1 right-1 left-1">
            <input type="text" class="db w-90 mr2 pv3 ph2 br3 ba" placeholder="Type message" v-model="message">
            <button type="submit" class="bn bg-white">
              <img src="../static/send.png" class="db w2 h2 bg-lightest-blue pa2 br2 pointer"  alt="send message image">
            </button>
          </div>
        </form> 

      </div>
   </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {client} from '~/init'
import { Databases, ID } from 'appwrite';
const databases = new Databases(client);
const Cryptr = require('cryptr');
const cryptr = new Cryptr('');
export default Vue.extend({
  data: () => ({
    message: '',
    databaseMessages: ['']
  }),

  methods: {
    listMessages: async function (){
      let promise = await databases.listDocuments('632754bf9b28a3d032e7', '632754dccfc24bf0505e');

      this.databaseMessages = promise.documents.map(document =>  cryptr.decrypt(document.message))
      console.log(this.databaseMessages)
    }, 
    sendMessage: async function(){
      const encryptedMessage = cryptr.encrypt(this.message)
      try {
        await databases.createDocument('632754bf9b28a3d032e7', '632754dccfc24bf0505e', ID.unique(), {'message': encryptedMessage})
        alert('message sent')
        this.message = '';
        this.listMessages()
      } catch(e){
        console.log(e)
      }

    }
    
  }
  
})
</script>

<style>
  .br-top {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
</style>