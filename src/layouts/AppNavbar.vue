<script setup lang="ts">
import { ref } from 'vue'
import cinemaLogo from '@/assets/cinemaLogo.png'
const userName = ref('Sara Rocha')
const avatar =
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
</script>

<template>
  <v-app-bar elevation="0" app color="cyan-darken-3">
    <template v-slot:prepend>
      <v-img class="nav-logo" alt="Logo" :src="cinemaLogo"></v-img>
    </template>

    <v-spacer></v-spacer>
    <div class="user-avatar">
      <h4>{{ userName }}</h4>
      <v-avatar>
        <v-img alt="Avatar" :src="avatar"></v-img>
      </v-avatar>
    </div>
  </v-app-bar>
</template>

<style scoped>
.user-avatar {
  display: flex;
  align-items: center;
  margin-right: 16px;
  gap: 10px;
}
.nav-logo {
  width: 110px;
  margin-left: 20px;
}
</style>
