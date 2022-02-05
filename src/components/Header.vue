<template>
  <div>
    <v-app-bar
        app
        :color="$vuetify.theme.dark ? 'indigo darken-3' : 'indigo lighten-2'"
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = true" class="mr-3"></v-app-bar-nav-icon>
        <v-icon large class="mr-3">mdi-newspaper-variant-multiple-outline</v-icon>

        <span class="text-h5">Brom.ru</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          class="mx-2"
          fab
          small
          :color="$vuetify.theme.dark ? 'deep-purple lighten-1' : 'yellow accent-2'"
          @click="changeTheme"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        fixed
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
        >
          <v-list-item @click="$router.push({name: 'Home'})">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="$router.push({name: 'Contacts'})">
            <v-list-item-icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Объявления</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push({name: 'About'})">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>О нас</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    drawer: false,
    group: null,
  }),

  methods: {
    changeTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (localStorage.getItem('dark') === 'true') {
        localStorage.setItem('dark', 'false');
      } else {
        localStorage.setItem('dark', 'true');
      }
    }
  },
};
</script>

<style scoped>

</style>