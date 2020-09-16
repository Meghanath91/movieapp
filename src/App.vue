<template>
  <div id="app">
    <Header />
    <ProfileForm />
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
import ProfileForm from "./components/Form/ProfileForm";
export default {
  name: "App",
  components: {
    Header,
    ProfileForm,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #030a22;
}
</style>
