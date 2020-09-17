<template>
  <v-app>
    <v-content id="app">
      <Header />
      <div class="main-container">
        <div class="form-search-container">
          <ProfileForm v-bind:profile="profile" />
          <SearchMovie v-bind:movies="movies" v-on:add-movie="addMovie" />
        </div>
        <div>
          <MovieContainer v-bind:movies="movies" v-on:delete-movie="deleteMovie" />
          <CreateProfileButton v-on:submit-profile="submitProfile" />
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
      profile: {
        firstName: "",
        lastName: "",
        shortBio: "",
      },
    };
  },
  methods: {
    addMovie(movie) {
      if (this.movies.length < 15) {
        this.movies.push(movie);
      } else {
        alert("Maximum 15 movies allowed");
      }
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
    submitProfile() {
      if (this.profile.firstName === "") {
        alert("First Name is required");
      } else if (this.profile.lastName === "") {
        alert("Last Name is required");
      } else if (this.profile.shortBio === "") {
        alert("Short-bio is required");
      } else if (this.movies.length < 3) {
        alert("Please add atleast 3 movies to favorite");
      } else {
        alert("your profile has been successfully created");
        location.reload();
      }
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
