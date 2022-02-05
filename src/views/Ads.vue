<template>
  <v-container fluid>
    <h1 class="text-center mb-5">Объявления</h1>
    <Preloader v-if="!sales.length"/>
    <v-row v-else dense>
      <v-col
          v-for="item in sales"
          :key="item.id"
          cols="3"
      >
        <Ad :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Ad from '../components/Ad';
import Preloader from "../components/Preloader";

export default {
  name: "Contacts",
  components: {Ad, Preloader},

  data() {
    return {
      sales: [],
    }
  },

  methods: {
    async getSales() {
      let {data} = await axios.get(
          `https://demo-api.vsdev.space/api/brom/sales`
      );
      this.sales = data;
    },
  },

  created() {
    this.getSales();
  },
};
</script>
