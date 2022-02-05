<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a @click="$router.back()">Назад</a>
    <a @click="$router.push('/contacts')">Контакты</a>
    <div>
      <Preloader v-if="!articles.length"/>
      <p v-else>{{ articles }}</p>
    </div>
  </div>
</template>

<script>
import Preloader from "../components/Preloader";

export default {
  components: {Preloader},

  computed: {
    articles() {
      return this.$store.getters.GET_ARTICLES;
    }
  }

};

</script>
