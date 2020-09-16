<template>
  <v-form>
    <v-container>
      <v-row class="form">
        <v-text-field
          v-model="firstName"
          clearable="true"
          :rules="[v=>!!v||'First Name is required']"
          requiredclearable="true"
          label="First Name"
          solo
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :rules="[v=>!!v||'Last Name is required']"
          v-bind:disabled="firstName.length === 0 ? true : false"
          clearable="true"
          label="Last Name"
          solo
        ></v-text-field>
        <v-textarea
          maxlength="500"
          clearable="true"
          :rules="[v=>!!v||'Short Bio is required']"
          v-bind:disabled="lastName.length === 0 ? true : false"
          :counter="500"
          autofocus="true"
          solo
          name="input-7-4"
          label="Short-Bio"
        ></v-textarea>
      </v-row>
    </v-container>
  </v-form>
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