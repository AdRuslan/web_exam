<template>
  <div class="about">
    <h1 class="text-center mb-5">О нас</h1>
    <Preloader v-if="!aboutText && !aboutImage"/>
      <p>{{ aboutText }}</p>
  </div>
</template>

<script>
import Preloader from "../components/Preloader";
import axios from "axios";

export default {
  components: {Preloader},

  data() {
    return {
      aboutText: '',
      aboutImage: '',
    };
  },

  methods: {
    async getAboutPage() {
      let {data} = await axios.get(
          `https://demo-api.vsdev.space/api/brom/about_page`
      );
      this.aboutText = data.text;
      this.aboutText = data.text;
    },
  },

  created() {
    this.getAboutPage();
  },

};

</script>
