<template>
  <div class="btn-container">
    <input
      @click="$emit('submit-profile')"
      class="profile-create-btn"
      type="submit"
      name="submit"
      value="Create Profile"
    />
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
  font-size: 2rem;
  color: white;
  width: 35%;
  border: none;
  border-radius: 5px;
  height: 8vh;
}
@media only screen and (max-width: 768px) {
  .profile-create-btn {
    margin: 10% 0 10% 0;
    font-size: 1rem;
  }
}
</style>