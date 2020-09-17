<template>
  <div class="btn-container">
    <input class="profile-create-btn" type="submit" name="submit" value="Create Profile" />
  </div>
</template>
<script>
export default {
  name: "CreateProfileButton",
};
</script>
<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
}
.profile-create-btn {
  background-color: #c11065;
  color: white;
  width: 35%;
  border: none;
  border-radius: 5px;
  height: 8vh;
}
</style>