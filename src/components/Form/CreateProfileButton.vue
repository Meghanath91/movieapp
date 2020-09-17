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
  // methods: {
  //   submitProfile() {
  //     alert("please add atleast 3 movies");
  //     console.log("working");
  //   },
  // },
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
</style>