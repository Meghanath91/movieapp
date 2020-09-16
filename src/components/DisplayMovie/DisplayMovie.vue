<template>
  <div class="result-item-container">
    <div>
      <img
        v-if="movie.poster_path"
        v-bind:src="'http://image.tmdb.org/t/p/w500/'+movie.poster_path"
        width="130px"
      />
      <img v-else src="/assets/no_image.jpg" width="130px" />
    </div>
    <div class="details-container">
      <h3>{{movie.title}}</h3>
      <p>Release Date : {{movie.release_date}}</p>
      <p class="user-score">
        User Score :
        <span v-if="movie.vote_average>=8" class="green">{{movie.vote_average}}</span>
        <span v-else class="red">{{movie.vote_average}}</span>
      </p>
      <p>{{movie.overview}}</p>
      <div class="btn-container">
        <p>View Details</p>
        <input @click="addMovie" type="button" value="Add movie to favorites" />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "DisplayMovie",
  props: ["movie", "movies"],

  methods: {
    addMovie(e) {
      e.preventDefault();

      if (this.movies.length < 15) {
        const newMovie = {
          id: uuidv4(),
          data: this.movie,
        };
        this.movies.push(newMovie);
        this.$emit("add-movie", newMovie);
      } else {
        alert("Maximum 15 movies allowed");
      }
    },
  },
};
</script>

<style scoped>
.result-item-container {
  display: flex;
  border-radius: 25px;
}
.result-item-container img {
  border-radius: 25px;
}
.details-container {
  margin-left: 3%;
}
.btn-container {
  margin-top: 4%;
  display: flex;
  justify-content: space-around;
}
.green {
  color: greenyellow;
}
.red {
  color: red;
}
</style>