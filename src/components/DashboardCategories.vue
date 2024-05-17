<script setup lang="ts">
import { AppCard } from '@/components'
import moviesImage from '@/assets/movies.webp'
import peopleImage from '@/assets/people.webp'
const data = [
  {
    id: 1,
    description: "List of Star Wars movie's",
    img: moviesImage,
    title: 'Movies',
    page: 'movies'
  },
  {
    id: 2,
    description: 'List of people who entered Star Wars',
    img: peopleImage,
    title: 'People',
    page: 'people'
  }
]
</script>

<template>
  <div class="categories">
    <h2>Categories</h2>
    <div class="card-container">
      <AppCard
        v-for="category in data"
        :key="category.id"
        :description="category.description"
        :img="category.img"
        :title="category.title"
        :page="category.page"
      />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}
@media (max-width: 992px) {
  .card-container {
    display: block;
  }
}
.categories {
  margin-top: 20px;
}
</style>
