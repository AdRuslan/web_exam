<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
  }),


  created() {
    this.$store.dispatch('GET_ADS_QUANTITY');
  }
};
</script>
