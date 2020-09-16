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
          class="text-area"
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
<style>
.text-area .theme--light.v-counter {
  color: honeydew;
}
.form {
  display: flex;
  flex-direction: column;
  width: 60%;

  /* align-content: center; */
}
</style>