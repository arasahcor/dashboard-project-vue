<script setup lang="ts">
import { RouterView } from 'vue-router'
import { MainLayout } from './layouts'
</script>

<template>
  <v-layout>
    <MainLayout>
      <RouterView />
    </MainLayout>
  </v-layout>
</template>

<style scoped></style>
