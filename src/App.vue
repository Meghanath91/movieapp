<template>
  <v-app>
    <v-content id="app">
      <Header />
      <div class="main-container">
        <div class="form-search-container">
          <ProfileForm />
          <SearchMovie v-bind:movies="movies" />
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Layout/Header";
import ProfileForm from "./components/Form/ProfileForm";
import SearchMovie from "./components/SearchMovie/SearchMovie";
export default {
  name: "App",
  components: {
    Header,
    ProfileForm,
    SearchMovie,
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #030a22;
}
.form-search-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.main-container {
  display: grid;
  grid-template-rows: 1fr 2fr;
}
</style>
