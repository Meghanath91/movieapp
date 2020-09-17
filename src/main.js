import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import LottieAnimation from "lottie-vuejs"; // import lottie-vuejs

Vue.use(LottieAnimation); // add lottie-animation to your global scope

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
