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
        <span v-if="movie.vote_average>=8" id="green">{{movie.vote_average}}</span>
        <span v-else id="red">{{movie.vote_average}}</span>
      </p>
      <p class="overview">{{movie.overview}}</p>
      <div class="btn-container">
        <button @click="viewMovie" type="button" class="view-icon">
          <img src="/assets/view-icon.png" width="30px" /> View Details
        </button>
        <!--  -->
        <button @click="addMovie" type="button" class="fav-icon">
          <img src="/assets/star2.png" width="25px" /> Add to favorites
        </button>
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
    viewMovie(e) {
      e.preventDefault();
      const url = `https://www.themoviedb.org/movie/${this.movie.id}`;
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.result-item-container {
  color: cornsilk;
  background-color: #080618ff;
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
.fav-icon {
  display: flex;
}
.view-icon {
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.overview {
  padding-top: 5%;
}
#green {
  color: rgb(47, 255, 92);
  margin-bottom: 5%;
  font-size: 15px;
  border: 3px solid greenyellow;
  padding: 1%;
  border-radius: 7px;
}
#red {
  color: red;
  margin-bottom: 5%;
  font-size: 15px;
  border: 3px solid red;
  padding: 1%;
  border-radius: 7px;
}
.user-score {
  display: inline;
}
@media only screen and (max-width: 768px) {
  .result-item-container {
    margin-top: 15%;
    display: flex;
    flex-direction: column;
  }
}
</style>