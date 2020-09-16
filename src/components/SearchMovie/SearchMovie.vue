<template>
  <div>
    <div class="search-container">
      <h1>Add favorite movies</h1>
      <p>add at least 3 movies & you can add upto 15 movies</p>
      <form @submit="searchMovie">
        <v-text-field
          clearable="true"
          v-model="movieQuery"
          placeholder="Please enter a movie title"
          solo
        ></v-text-field>
        <input class="search-btn" type="submit" name="submit" value="Search" />
      </form>
    </div>
    <div class="scroll">
      <div class="result-container" v-bind:key="movie.id" v-for="movie in result">
        <DisplayMovie v-on:add-movie="addMovie" v-bind:movie="movie" v-bind:movies="movies" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DisplayMovie from "../DisplayMovie/DisplayMovie";

export default {
  name: "SearchMovie",
  components: {
    DisplayMovie,
  },
  props: ["movies"],
  data() {
    return {
      movieQuery: "",
      result: {},
    };
  },
  methods: {
    async searchMovie(e) {
      e.preventDefault();
      console.log("working");
      const API_KEY =
        (await process.env.VUE_APP_API_KEY1) || process.env.VUE_APP_API_KEY2;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.movieQuery}`
        )
        .then(async (movie) => {
          const searchResult = await movie.data.results;
          this.result = searchResult;
          this.movieQuery = "";
        });
    },
  },
};
</script>

<style scoped>
.search-container {
  color: white;
}
form {
  display: flex;
  margin-bottom: 5%;
}
input {
  width: 60%;
  border: none;
  border-radius: 15px;
  line-height: 3rem;
}
.search-btn {
  margin-left: 15%;
  background-color: #eedb2c;
  border-radius: 15px;
  width: 100px;
}
.result-container {
  margin: 1%;
  padding: 3%;
  border-radius: 25px;
  background-color: white;
  overflow-y: auto;
}
.scroll {
  height: 400px;
  overflow-y: auto;
  border-radius: 25px;
}
</style>