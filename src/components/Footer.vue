<template>
  <v-footer
      padless
  >
    <v-card-text :class="$vuetify.theme.dark ? 'indigo darken-3' : 'indigo lighten-2'" class="text-center">
      <v-icon>mdi-copyright</v-icon>
      <span>
        <strong>Адигамов Р.Р.</strong> - {{ new Date().getFullYear() }}
      </span>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>

</style>