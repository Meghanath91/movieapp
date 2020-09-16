<template>
  <div class="movie-main-container">
    <h2>Favorite Movies</h2>
    <p>Please search for a movie and add it to favorites</p>
    <div class="movie-class"></div>
  </div>
</template>
<script>
export default {
  name: "MovieContainer",
  props: ["movies"],
  components: {},
};
</script>