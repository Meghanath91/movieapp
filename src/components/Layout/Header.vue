<template>
  <header class="header">
    <img src="/assets/logo.jpg" width="50px" />
    <h1>Movie App</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  display: flex;
  color: white;
  text-align: start;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
}
</style>