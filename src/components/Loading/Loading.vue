<template>
  <div>
    <lottie-animation
      path="../../assets/movie.json"
      :loop="false"
      :autoPlay="true"
      :loopDelayMin="2.5"
      :loopDelayMax="5"
      :speed="1"
      :width="256"
      :height="256"
      @AnimControl="setAnimController"
    />
  </div>
</template>
<script>
import LottieAnimation from "lottie-vuejs"; // import lottie-vuejs

export default {
  name: "Loading",
  components: {
    LottieAnimation,
  },
};
</script>