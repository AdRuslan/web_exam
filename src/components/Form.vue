<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Добавить объявление
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Заполните поля ниже</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    :items="form.fields.type.values"
                    :label="form.fields.type.title"
                    v-model="typeSelect"
                    required
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    v-model="city"
                    :items="form.fields.city.values"
                    :label="form.fields.city.title"
                    required
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="4"
              >
                <v-text-field
                    v-model="address"
                    :label="form.fields.address.title"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="4"
              >
                <v-text-field
                    v-model="phone"
                    :label="form.fields.phone.title"
                    type="phone"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="4"
              >
                <v-text-field
                    v-model="price"
                    :label="`${form.fields.price.title} (руб.)`"
                    type="number"
                    required
                ></v-text-field>
              </v-col>

              <template v-if="typeSelect === 'car'">
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="carModel"
                      :label="form.reference_fields['type.car'].model.title"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      v-model="carType"
                      :items="form.reference_fields['type.car'].car_type.values"
                      :label="form.reference_fields['type.car'].car_type.title"
                      required
                  ></v-select>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="engineVolume"
                      :label="`${form.reference_fields['type.car'].engine_volume.title} (литров)`"
                      type="number"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="enginePower"
                      :label="form.reference_fields['type.car'].engine_power.title"
                      type="number"
                      required
                  ></v-text-field>
                </v-col>
              </template>

              <template v-else-if="typeSelect === 'apartment'">
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="apartRooms"
                      :label="form.reference_fields['type.apartment'].rooms.title"
                      type="number"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="apartSquare"
                      :label="form.reference_fields['type.apartment'].square.title"
                      type="number"
                      required
                  ></v-text-field>
                </v-col>
              </template>

              <template v-else>
                Выберите тип объявления...
              </template>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="addSale"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",

  data: () => ({
    dialog: false,
    form: null,

    typeSelect: null,
    city: '',
    address: '',
    phone: '',
    price: '',
    carModel: '',
    carType: '',
    engineVolume: '',
    enginePower: '',
    apartRooms: '',
    apartSquare: '',
  }),

  methods: {
    async getForm() {
      let {data} = await axios.get(
          `https://demo-api.vsdev.space/api/brom/sales/form`
      );
      this.form = data;
    },

    addSale() {
      try {
        axios.post(
            `https://demo-api.vsdev.space/api/brom/sales`,
            this.dataToPost()
        );
        this.$emit('update');
        this.dialog = false;
      } catch (e) {
        console.log(e);
      }
    },

    dataToPost() {
      if (this.typeSelect === 'car') {
        return (
            {
              type: this.typeSelect,
              city: this.city,
              address: this.address,
              phone: this.phone,
              price: this.price,
              model: this.carModel,
              car_type: this.carType,
              engine_volume: this.engineVolume,
              engine_power: this.enginePower
            });
      } else {
        return (
            {
              type: this.typeSelect,
              city: this.city,
              address: this.address,
              phone: this.phone,
              price: this.price,
              rooms: this.apartRooms,
              square: this.apartSquare,
            });
      }
    }
  },

  created() {
    this.getForm();
  },
};
</script>

<style scoped>

</style>