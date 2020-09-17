<template>
  <v-app>
    <v-content id="app">
      <Header />
      <div class="main-container">
        <div class="form-search-container">
          <ProfileForm />
          <SearchMovie v-bind:movies="movies" />
        </div>
        <div>
          <MovieContainer v-bind:movies="movies" v-on:delete-movie="deleteMovie" />
          <CreateProfileButton />
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Layout/Header";
import ProfileForm from "./components/Form/ProfileForm";
import MovieContainer from "./components/MovieContainer/MovieContainer";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import CreateProfileButton from "./components/Form/CreateProfileButton";

export default {
  name: "App",
  components: {
    Header,
    ProfileForm,
    SearchMovie,
    MovieContainer,
    CreateProfileButton,
  },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    deleteMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
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
  background-color: #080618ff;
}
.form-search-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.main-container {
  display: grid;
  grid-template-rows: 1fr 2fr;
}
@media only screen and (max-width: 768px) {
  .form-search-container {
    display: flex;
    flex-direction: column;
  }
  .main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
