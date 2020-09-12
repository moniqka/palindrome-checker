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
    <form class="container" @submit.prevent="checkIsPalindrome">
      <label for="text-box" :style="{ color: isPalindrome ? `green` : `red` }">{{ result }}</label>
      <input
        type="text"
        name="text-box"
        @focus="clearText"
        autocomplete="off"
        v-model="text"
        class="button button__input"
        placeholder="type in word or phase..."
      />
      <button type="submit" class="button">CHECK</button>
    </form>
    <section class="search-history">
      <ul class="search-history__list">
        <li
          v-for="(word, key) in history"
          :key="key"
          class="search-history__word"
        >
          <p class="search-history__word__text">{{ word.text }}</p>
          <span
            class="search-history__word__result"
            :style="{ color: word.palindrome ? `green` : `red` }"
          >
            {{ word.palindrome }}
          </span>
        </li>
      </ul>
    </section>
    <footer>Ceated by Monika Kowalska</footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import json from "../json/data.json";
export default {
  name: "Checker",
  data() {
    return {
      text: "",
      result: "",
      history: []
    };
  },
  computed: {
    ...mapGetters([
      "checkerHistory"
    ]),
    word() {
      return this.text.toLowerCase().replace(/[\W_]/g, "");
    },
    wordToCheck() {
      return this.word
        .split("")
        .reverse()
        .join("");
    },
    isPalindrome() {
      return this.word === this.wordToCheck;
    }
  },
  methods: {
    ...mapActions([
      "addCheckedWordToHistory",
      "getCheckerHistory"
    ]),
    clearText() {
      this.result = "";
      this.text = "";
    },
    checkIsPalindrome() {
      if (this.word && this.word === this.wordToCheck) {
        this.result = `YES! It is a palindrome!`;
      } else if (this.word && this.word !== this.wordToCheck) {
        this.result = `NO! It is not a palindrome`;
      } else {
        this.result = `Type in word or phase first!`;
      }
      this.addToHistory();
    },
    addToHistory() {
      let checkedWord = {
        text: this.text,
        palindrome: this.isPalindrome
      };
      if (this.word) {
        this.addCheckedWordToHistory(checkedWord);
      }
    }
  },
  created() {
    this.getCheckerHistory(json);
  },
  mounted() {
    this.history = this.checkerHistory && this.checkerHistory.reverse();
  }
};
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
  &__list {
    padding: 0;
  }
  &__word {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 20px;
    &__text {
      font-size: 18px;
      margin: 0;
    }
  }
}
</style>
