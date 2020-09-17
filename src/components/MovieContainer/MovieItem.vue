<template>
  <div class="movie-item">
    <img
      class="poster"
      v-if="movie.poster_path"
      v-bind:src="'http://image.tmdb.org/t/p/w500/'+movie.poster_path"
    />
    <img v-else src="/assets/Untitled.jpg" width="100px" height="135px" />
    <button @click="$emit('delete-movie',movie.id)" class="del-btn">
      <img src="/assets/delete-sign.png" width="20px" />
    </button>
  </div>
</template>
<script>
export default {
  name: "MovieItem",
  props: ["movie", "movies"],
};
</script>
<style scoped>
.movie-item {
  padding: 10%;
  display: flex;
  flex-direction: column;
  background-color: #27293a;
  width: 150px;
  height: 200px;
  align-items: center;
}
.poster {
  width: 100px;
  height: 130px;
}
.poster:hover {
  width: 300px;
  height: 400px;
  z-index: 1;
}
.movie-item p {
  color: white;
}
.del-btn {
  margin-top: 10%;
  width: 30%;
}
</style>