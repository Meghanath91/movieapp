<template>
  <v-form class="main-form">
    <v-row class="form">
      <v-text-field
        v-model="profile.firstName"
        clearable="true"
        :rules="[v=>!!v||'First Name is required']"
        requiredclearable="true"
        label="First Name"
        solo
      ></v-text-field>
      <v-text-field
        v-model="profile.lastName"
        :rules="[v=>!!v||'Last Name is required']"
        v-bind:disabled="profile.firstName.length === 0 ? true : false"
        clearable="true"
        label="Last Name"
        solo
      ></v-text-field>
      <v-textarea
        v-model="profile.shortBio"
        class="text-area"
        :maxlength="500"
        :clearable="true"
        :rules="[v=>!!v||'Short Bio is required']"
        v-bind:disabled="profile.lastName.length === 0 ? true : false"
        :counter="500"
        :autofocus="true"
        solo
        name="input-7-4"
        label="Short-Bio"
      ></v-textarea>
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: "ProfileForm",
  props: ["profile"],
  // data() {
  //   return {
  //   profile:""
  //   };
  // },
};
</script>
<style>
.text-area .theme--light.v-counter {
  color: honeydew;
}
.form {
  display: flex;
  flex-direction: column;
}
.main-form {
  padding: 5% 0 0 10%;
  width: 80%;
  display: flex;
  align-content: center;
}
@media only screen and (max-width: 768px) {
  .main-form {
    /* padding: 5% 0 0 12%; */
    width: 90%;
    display: flex;
    align-content: center;
  }
}
</style>