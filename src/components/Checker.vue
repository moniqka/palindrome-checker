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
      <input class="button button__input" placeholder="your text..."/>
      <button class="button">CHECK</button>
    </main>
    <section class="search-history">
    </section>
    <footer> Ceated by Monika Kowalska </footer>
  </div>
</template>

<script>
  export default {
    name: "Checker",
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
  .search-history {
    border: 2px solid $primary-dark;
    background-color: transparent;
    border-radius: 15px;
    color: $primary;
    width: 100%;
    margin: 10px;
    padding: 5px;
  }
</style>
