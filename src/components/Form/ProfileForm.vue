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
form {
  /* background-color: #061138; */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3%;
  line-height: 3rem;
  /* align-items: center; */
}
form p {
  color: white;
  margin-left: 50%;
}
form input {
  border: none;
  margin-left: 15%;
  width: 60%;
  margin-bottom: 5%;

  /* background-color: #27293a;
  color: white; */
  border-radius: 15px;

  line-height: 3rem;
}
textarea {
  border: none;
  width: 60%;
  margin-left: 15%;
  /* background-color: #27293a;
  color: white; */
  border-radius: 15px;
  line-height: 3rem;
}
</style>