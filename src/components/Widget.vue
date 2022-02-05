<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          class="mx-2"
          fab
          small
          color="primary"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </template>
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-3">
            Количество <br> объявлений:
          </v-list-item-title>
          <v-list-item-subtitle>Автомобили: {{adsQuantity.cars}}</v-list-item-subtitle>
          <v-list-item-subtitle>Квартиры: {{adsQuantity.apartments}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-img
            tile
            max-width="150"
            class="rounded-lg my-5"
            src="/img/widget_img.jpg"
        ></v-img>
      </v-list-item>

    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "Widget",

  computed: {
    adsQuantity() {
      return this.$store.getters.GET_ADS_QUANTITY;
    },
  },


};
</script>

<style scoped>

</style>