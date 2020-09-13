<template>
  <div class="container">
    <header>
      <div class="title" role="title">
        Palindrome Checker
      </div>
      <p class="title__description">
        It is NOT SAFE to log in to service only from front-end! Data must be send to back-end for a minimum security (the basic level of security for the transmission of any data over the network is HTTPS). It is possible to create easy log in system in node.js or php.
      </p>
    </header>
    <form class="container" @submit.prevent="loggIn">
      <input
        class="button button__input"
        v-model="typedUsername"
        placeholder="username (tester)"
      />
      <input
        class="button button__input"
        placeholder="password (123tester)"
        v-model="typedPassword"
      />
      <button type="submit" class="button">LOG IN</button>
    </form>
    <footer>Ceated by Monika Kowalska</footer>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    username: {
      type: String,
      default: ""
    },
    password: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      typedUsername: "",
      typedPassword: ""
    }
  },
  methods: {
    loggIn() {
      if (this.username === this.typedUsername && this.password === this.typedPassword) {
        this.$emit("isLoggedIn", true)
      }
    }
  }
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
