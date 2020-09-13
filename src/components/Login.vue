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
    <form class="container">
      <input class="button button__input" placeholder="username" />
      <input class="button button__input" placeholder="password" />
      <button class="button">LOG IN</button>
    </form>
    <footer>Ceated by Monika Kowalska</footer>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
@import "@/scss/_library.scss";
form.container {
  @media screen and (min-width: 500px) {
    padding: 0;
    width: 50%;
  }
}
</style>
