<template>
  <div class="movie-main-container">
    <h2>Favorite Movies</h2>
    <p>Please search for a movie and add it to favorites</p>
    <div class="movie-class">
      <div v-bind:key="movie.id" v-for="movie in movies" class="movie-sub-container">
        <MovieItem
          v-bind:movie="movie"
          v-bind:movies="movies"
          v-on:delete-movie="$emit('delete-movie',movie.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MovieItem from "./MovieItem";
export default {
  name: "MovieContainer",
  props: ["movies"],
  components: {
    MovieItem,
  },
};
</script>

<style scoped>
.movie-main-container {
  color: white;
}
.movie-main-container h2 {
  margin-top: 5%;
}
.movie-main-container h2,
p {
  margin-left: 8%;
}
.movie-class {
  display: flex;
  flex-flow: row wrap;
}
.movie-container {
  margin: 2%;
  background-color: #27293a;
  width: 95%;
  display: flex;
  flex-direction: row;
}
</style>