<template>
  <div>
    <h1 class="text-center">Главная страница</h1>
    <Preloader v-if="!mainText && !mainImage"/>
    <template v-else>
      <v-img
          max-height="700"
          class="rounded-lg my-5"
          :src="mainImage"
          alt="home"></v-img>
      <p v-html="mainText"></p>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Preloader from "../components/Preloader";

  export default {
    name: 'Home',
    components: {Preloader},

    data() {
      return {
        mainText: '',
        mainImage: '',
      }
    },

    methods: {
      async getHomePage() {
        let { data } = await axios.get(
            `https://demo-api.vsdev.space/api/brom/home_page`
        );
        this.mainText = data.text;
        this.mainImage = data.image;
      },
    },

    created() {
      this.getHomePage();
    },

  }
</script>
