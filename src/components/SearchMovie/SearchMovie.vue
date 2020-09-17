<template>
  <div class="search-display-container">
    <div class="search-container">
      <h2>Add favorite movies</h2>
      <p>add at least 3 movies & you can add upto 15 movies</p>

      <v-text-field
        @keyup="getResult(movieQuery)"
        clearable="true"
        v-model="movieQuery"
        placeholder="Please enter a movie title"
        solo
      ></v-text-field>
      <img src="/assets/scroll.gif" width="60px" />
    </div>

    <div v-if="result.length" class="scroll">
      <div class="result-container" v-bind:key="movie.id" v-for="movie in result">
        <DisplayMovie v-on:add-movie="addMovie" v-bind:movie="movie" v-bind:movies="movies" />
      </div>
    </div>
    <img class="title-img" v-else-if="movieQuery===''" src="/assets/5.gif" width="600px" />
    <!-- <h1 class="messages" v-else-if="movieQuery===''">Add movies</h1> -->
    <h1 class="messages" v-else>Can’t find that Movie</h1>
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
    getResult(movieQuery) {
      console.log("working");
      const API_KEY =
        process.env.VUE_APP_API_KEY1 || process.env.VUE_APP_API_KEY2;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieQuery}`
        )
        .then(async (movie) => {
          const searchResult = await movie.data.results;
          this.result = searchResult;
        });
    },

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
.title-img {
  padding: 0 10% 10% 10%;
}
.search-container {
  padding: 3% 2% 0 0;
  color: white;
  width: 100%;
}
.search-container img {
  margin-top: 80%;
  margin-left: 30%;
}
.search-display-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

form {
  /* display: flex; */
  margin-bottom: 5%;
}

.search-btn {
  margin-left: 15%;
  background-color: #eedb2c;
  border-radius: 15px;
  width: 100px;
}
.result-container {
  background-color: rgb(6, 6, 34);
  /* background-color: rgb(4, 4, 22); */
  margin: 0 4% 2% 2%;
  padding: 3%;
  border-radius: 25px;
  /* background-color: white; */
  overflow-y: auto;
}
.scroll {
  height: 500px;
  overflow-y: auto;
  border-radius: 25px;
}
.messages {
  color: white;
  text-align: center;
}
</style>