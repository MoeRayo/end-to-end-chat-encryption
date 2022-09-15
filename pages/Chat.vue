<template>
  <div class="ba b--light-blue bw3 vh-100 pv5 ph2 athelas">
    <form @submit.prevent="" class="bg-lightest-blue br3 mw6 w-40-m w-70 w-20-l center pt3 shadow-5 ">
      <h2 class="near-black tc f3">Chat</h2>
      <div class="bg-white mt3 br-top pa3 vh-50 relative">

        <div class="flex justify-between items-center absolute bottom-1 right-1 left-1">
          <input type="text" class="db w-90 mr2 pv3 ph2 br3 ba" placeholder="Type message">
          <img src="../static/send.png" class="db ma w2 h2 bg-lightest-blue pa2 br2 pointer"  alt="send message image">
        </div>
      </div>

      </form> 
  </div>
</template>

<style>
  .br-top {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
</style>