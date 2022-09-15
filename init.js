
import { Client, Account } from "appwrite";
export const client = new Client();
export const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('632276a9b6e340bea136') // Your project ID
;

export const signIn = async function (email, password) {
    try{
      await account.createEmailSession(email, password)
        window.location.href = '/chat'
      alert("user signed in")
    } catch (e){
        console.log(e)
    }
  }