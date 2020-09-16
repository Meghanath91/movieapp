<template>
  <div>
    <div class="search-container">
      <h1>Add favorite movies</h1>
      <p>add at least 3 movies & you can add upto 15 movies</p>
      <form>
        <input type="text" name="title" placeholder="Please enter movie title" />
        <input class="search-btn" type="submit" name="submit" value="Search" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMovie",
};
</script>