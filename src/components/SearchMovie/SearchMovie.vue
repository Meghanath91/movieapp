<template>
  <div>
    <div class="search-container">
      <h1>Add favorite movies</h1>
      <p>add at least 3 movies & you can add upto 15 movies</p>
      <form @submit="searchMovie">
        <input type="text" name="title" v-model="movieQuery" placeholder="Please enter movie title" />
        <input class="search-btn" type="submit" name="submit" value="Search" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchMovie",
  components: {},
  props: ["movies"],
  data() {
    return {
      movieQuery: "",
      result: {},
    };
  },
  methods: {
    searchMovie(e) {
      e.preventDefault();
      const API_KEY =
        process.env.VUE_APP_API_KEY1 || process.env.VUE_APP_API_KEY2;

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.movieQuery}`
        )
        .then((movie) => {
          const searchResult = movie.data.results;
          this.result = searchResult;
          console.log(searchResult);
          this.movieQuery = "";
        });
    },
  },
};
</script>