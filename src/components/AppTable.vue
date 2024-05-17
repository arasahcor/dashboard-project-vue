<script>
import { getAllData } from '@/services'
import { ref, onMounted } from 'vue'

//NOTE:
//Paginations and sort should be done in BE side. We would send another request with the params/filters we want
//example --> page:3 / order_by:'name&age' / ... for example.. something like that
//The problem is that the API has to be prepared for that

export default {
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const movies = ref({})
    const moviesError = ref('')
    const moviesLoading = ref(false)
    const itemsPerPage = 5

    const fetchData = async () => {
      try {
        moviesLoading.value = true
        const { data, error, loading } = await getAllData(props.apiUrl)
        movies.value = data.value
        moviesError.value = error.value
        moviesLoading.value = loading.value
      } catch (err) {
        console.error('Error:', err)
      } finally {
        moviesLoading.value = false
      }
    }

    onMounted(async () => {
      fetchData()
    })
    return { movies, moviesError, moviesLoading, itemsPerPage }
  }
}
</script>

<template>
  <div>
    <!-- <div v-if="moviesLoading">Loading...</div>
    <div v-else> -->
    <div v-if="moviesError">{{ moviesError }}</div>
    <div v-else>
      <v-data-table
        class="data-table"
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="movies.results"
        :items-length="movies.count"
        :loading="moviesLoading"
        loading-text="Loading... Please wait"
      ></v-data-table>
    </div>
    <!-- </div> -->
  </div>
</template>

<style>
.data-table {
  margin-top: 20px;
  border-radius: var(--border-4);
}
.data-table thead th span {
  font-weight: 700;
}
</style>
