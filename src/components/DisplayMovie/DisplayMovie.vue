<template>
  <div class="result-item-container">
    <div>
      <img v-bind:src="'http://image.tmdb.org/t/p/w500/'+movie.poster_path" width="130px" />
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
        <input type="button" value="Add movie to favorites" />
      </div>
    </div>
  </div>
</template>