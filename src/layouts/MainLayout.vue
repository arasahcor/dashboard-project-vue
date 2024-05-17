<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="content">
    <!-- add navbar and sidebar as a common layout -->
    <AppNavbar />
    <AppSidebar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<style scoped>
.content {
  margin: 2% 4%;
  width: 100%;
}
</style>
