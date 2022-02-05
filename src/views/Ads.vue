<template>
  <v-container fluid>
    <h1 class="text-center mb-5">Объявления</h1>
    <Form @update="getSales"/>
    <Preloader v-if="!sales.length"/>
    <v-row v-else dense class="mt-7">
      <v-col
          v-for="item in sales"
          :key="item.id"
          cols="3"
          class="mt-4"
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
import Form from "../components/Form";

export default {
  name: "Contacts",
  components: {Ad, Preloader, Form},

  data() {
    return {
      sales: [],
    }
  },

  methods: {
    async getSales() {
      console.log()
      let {data} = await axios.get(
          `https://demo-api.vsdev.space/api/brom/sales`
      );
      this.sales = data.reverse();
    },
  },

  created() {
    this.getSales();
  },
};
</script>
