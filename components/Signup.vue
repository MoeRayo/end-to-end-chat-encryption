<template>
  <div class="ba b--light-blue bw3 vh-100 pv5 ph2 athelas">
    <form action="" class="bg-lightest-blue br2 mw6 w-40-m w-70 w-20-l center pa3 shadow-5">
      
      <h2 class="ttc tc">Sign up</h2>

      <label for="name" class="db mb1 black-70">Name</label>
      <input name="name" id="name" type="text" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="John Doe">

      <label for="email" class="db mb1 black-70">Email</label>
      <input name="email" id="email" type="email" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="example@email.com">

      <label for="password" class="db mb1 black-70">Password</label>
      <input name="password" id="password" type="password" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="••••••••">

      <label for="confirm-password" class="db mb1 black-70">Confirm Password</label>
      <input name="confirm-password" id="confirm-password" type="password" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="••••••••">

      <button class="center db ph4 pv2 bg-navy ba br3 white pointer">Sign up</button>
      
      <p>Already have an account? <a href="/signin" class="black-70 b">Sign in</a> </p>
    </form>    

  </div>
</template>