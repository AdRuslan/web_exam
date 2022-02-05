<template>
  <div>
    <h1 class="text-center">Главная страница</h1>
    <v-img
        max-height="700"
        class="rounded-lg my-5"
        src="/img/home_page_img.jpg"
        alt="home"></v-img>
    <Preloader v-if="!mainText"/>
    <p v-else>{{mainText}}</p>
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
      }
    },

    methods: {
      async getComments() {
        let { data } = await axios.get(
            `http://demo-api.vsdev.space/api/brom/home_page`
        );
        this.mainText = data.text;
      },
    },

    created() {
      this.getComments();
    },
  }
</script>
