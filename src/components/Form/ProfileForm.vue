<template>
  <form>
    <input type="text" v-model="firstName" name="firstName" placeholder="First name" />
    <input type="text" v-model="lastName" name="lastName" placeholder="Last name" />
    <textarea placeholder="Short Bio" v-model="shortBio" />
    <p>characters left</p>
  </form>
</template>
<script>
export default {
  name: "ProfileForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      shortBio: "",
    };
  },
};
</script>
<style scoped>
</style>