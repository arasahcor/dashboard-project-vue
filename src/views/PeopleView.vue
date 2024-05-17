<script setup lang="ts">
import { AppTable } from '@/components'

const headers = [
  {
    title: 'Name',
    key: 'name',
    align: 'start'
  },
  { title: 'Gender', key: 'gender' },
  { title: 'Birth_year', key: 'birth_year' },
  { title: 'Height', key: 'height' },
  { title: 'Hair color', key: 'hair_color' }
]
</script>

<template>
  <div>
    <h1>People</h1>
    <AppTable apiUrl="https://swapi.dev/api/people" :headers="headers" />
  </div>
</template>
