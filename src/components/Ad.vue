<template>
  <v-card
      :color="item.type === 'car' ? 'blue-grey lighten-5' : 'amber lighten-1'"
      class="mx-auto"
      max-width="344"
  >
    <v-img
        :src="item.type === 'car' ? '/img/car_img.png' : '/img/home_img.png'"
        height="200px"
    ></v-img>

    <v-card-title v-if="item.type === 'car'">
      {{item.model}} - {{item.price}} руб.
    </v-card-title>
    <v-card-title v-else>
      Комнат: {{item.rooms}} - {{item.price}} руб.
    </v-card-title>

    <v-card-subtitle>
      {{item.phone}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="red"
          text
      >
        Больше
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Город: {{item.city}} <br>
          Адрес: {{item.address}} <br>
          <template v-if="item.type === 'car'">
              Тип кузова: {{item.car_type}} <br>
              Объем двигателя: {{item.engine_model}} <br>
              Мощность двигателя: {{item.engine_power}}
          </template>
          <template v-else>
              Площадь: {{item.square}}
          </template>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Ad",
  props: ['item'],

  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>

</style>