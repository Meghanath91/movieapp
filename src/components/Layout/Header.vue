<template>
  <header class="header">
    <div>
      <img id="logo-item" src="/assets/3.gif" />
    </div>
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
  padding: 1%;
}
.header h1 {
  margin-left: 1.5%;
}
#logo-item {
  width: 40px;
}
</style>