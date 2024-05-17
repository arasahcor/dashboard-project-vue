<script setup lang="ts">
import { ref } from 'vue'

const menuOptions = [
  {
    id: 1,
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    value: 'dashboard',
    page: '/'
  },
  {
    id: 2,
    title: 'Movies',
    icon: 'mdi-video-vintage ',
    value: 'movies',
    page: 'movies'
  },
  {
    id: 3,
    title: 'People',
    icon: 'mdi-account-group',
    value: 'people',
    page: 'people'
  }
]

let drawer = ref(true)
let rail = ref(true)
</script>

<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
    <v-list-item nav>
      <template v-slot:append>
        <v-btn
          size="small"
          :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          variant="text"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <!-- <v-divider></v-divider> -->

    <v-list density="compact" nav>
      <v-list-item
        v-for="option in menuOptions"
        :key="option.id"
        @click="() => $router.push(option.page)"
        :prepend-icon="option.icon"
        :title="option.title"
        :value="option.value"
      ></v-list-item>
    </v-list>

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Section A</RouterLink>
        <RouterLink to="/people">Section B</RouterLink>
      </nav>
    </div> -->
  </v-navigation-drawer>
</template>

<style scoped></style>
