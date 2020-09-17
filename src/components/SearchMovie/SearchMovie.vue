<template>
  <div class="search-display-container">
    <div class="search-container">
      <h2>Add favorite movies</h2>
      <p>add at least 3 movies & you can add upto 15 movies</p>

      <v-text-field
        @keyup="getResult(movieQuery)"
        :clearable="true"
        v-model="movieQuery"
        placeholder="Please enter a movie title"
        loading
        solo
      ></v-text-field>
      <img src="/assets/scroll.gif" width="60px" />
    </div>

    <div v-if="result.length" class="scroll">
      <div class="result-container" v-bind:key="movie.id" v-for="movie in result">
        <DisplayMovie
          v-on:add-movie="$emit('add-movie',movie)"
          v-bind:movie="movie"
          v-bind:movies="movies"
        />
      </div>
    </div>
    <img class="title-img" v-else-if="movieQuery===''" src="/assets/5.gif" />
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
    //handle movie search event
    getResult(movieQuery) {
      //api key for moviedb loading from .env file
      const API_KEY =
        process.env.VUE_APP_API_KEY1 || process.env.VUE_APP_API_KEY2;
      //using axios to do get request to api with key and dynamic query
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieQuery}`
        )
        .then(async (movie) => {
          //searchresults stored and assigned to result
          const searchResult = await movie.data.results;
          this.result = searchResult;
        });
    },
  },
};
</script>

<style scoped>
.title-img {
  padding: 10%;
  width: 600px;
}
.search-container {
  margin-bottom: 5%;
  padding: 3% 8% 0 8%;
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
  margin-bottom: 5%;
}

.search-btn {
  margin-left: 15%;
  background-color: #eedb2c;
  border-radius: 15px;
  width: 100px;
}
.result-container {
  background-color: #080618ff;
  margin: 0 4% 2% 2%;
  padding: 3%;
  border-radius: 25px;
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

@media only screen and (max-width: 768px) {
  .search-display-container {
    display: flex;
    flex-direction: column;
  }
  .search-container {
    height: 20vh;
  }
  .title-img {
    margin: auto;
    margin-top: 5%;
    width: 300px;
  }
  .search-container img {
    display: none;
  }
  .messages {
    margin-top: 12%;
    font-size: 18px;
  }
}
</style>