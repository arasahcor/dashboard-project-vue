import axios from 'axios'
import { ref } from 'vue'

//NOTE: It can be reused for multiple requests
const getAllData = async (apiUrl: string) => {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  const load = async () => {
    try {
      const response = await axios.get(apiUrl)
      if (response.status !== 200) {
        throw Error('no data avaliable')
      }
      data.value = await response.data
    } catch (err: any) {
      error.value = err.message
      loading.value = false
    }
  }
  await load()

  //it retuurns the result data, the loading status and error, if exists
  return { data, error, loading }
}

export default getAllData
