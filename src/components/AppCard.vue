<script lang="ts">
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    page: {
      type: String,
      required: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>

<template>
  <div>
    <v-card elevation="0" @click="() => $router.push(page)" class="card mx-auto" max-width="344">
      <div class="image">
        <div class="overlay-color"></div>
        <v-img height="200px" :src="img" :alt="'image of' + page" cover></v-img>
      </div>

      <v-card-title> {{ title }} </v-card-title>

      <v-card-subtitle> {{ description }} </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- <router-link :to="page">
          <v-btn>See More</v-btn>
        </router-link> -->
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.v-card {
  width: 280px;
  margin: 5%;
}
.image {
  position: relative;
}

.overlay-color {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  background-color: var(--cyan-darken-3);
}

.overlay-color:hover {
  opacity: 0.1;
}

.card {
  border: 1px solid var(--vt-c-white-mute);
}
</style>
