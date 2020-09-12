<template>
  <div class="container">
    <header>
      <div class="title" role="title">
        Palindrome Checker
      </div>
      <p class="title__description">
        A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward.
      </p>
    </header>
    <main class="container">
      <input class="button button__input" placeholder="username"/>
      <input class="button button__input" placeholder="password"/>
      <button class="button">LOG IN</button>
    </main>
    <footer> Ceated by Monika Kowalska </footer>
  </div>
</template>

<script>
  export default {
    name: "Login",
  }
</script>

<style lang="scss">
@import "@/scss/_library.scss";
  .title {
    text-transform: uppercase;
    font-size: $font-title;
    &__description {
      color: $primary-light;
      font-family: $basefont-condensed;
    }
  }
  main.container {
    margin-top: 5%;
    height: auto;
  }
</style>
