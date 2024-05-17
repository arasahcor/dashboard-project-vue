<script setup lang="ts">
import { AppTable } from '@/components'

const headers = [
  {
    title: 'Title',
    key: 'title',
    align: 'start'
  },
  { title: 'Director', key: 'director' },
  { title: 'Producer', key: 'producer' },
  { title: 'Release Date', key: 'release_date' },
  { title: 'Opening Crawl', key: 'opening_crawl' }
]
</script>

<template>
  <div>
    <h1>Movies</h1>
    <AppTable apiUrl="https://swapi.dev/api/films/" :headers="headers" />
  </div>
</template>
