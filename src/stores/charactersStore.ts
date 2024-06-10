import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ApiResponse, PaginationInfo, Character } from './types'
import axios from 'axios'
import type { AxiosResponse } from 'axios'

export const useCharactersStore = defineStore('character', () => {
  // State properties
  const pageNumber = ref(1)
  const search = ref('')
  const status = ref('')
  const gender = ref('')
  const species = ref('')
  const apiResponse = ref<ApiResponse>({} as ApiResponse)
  const isFetching = ref(false)

  const characters = computed(() => apiResponse.value.results as Character[])
  const paginationInfo = computed(() => apiResponse.value.info as PaginationInfo) //ref<PaginationInfo>({} as PaginationInfo)

  const fetchUrl = async (url: string | null): Promise<void> => {
    if (isFetching.value) return
    isFetching.value = true
    try {
      const uri: string = `https://rickandmortyapi.com/api/character/?page=${pageNumber.value}&name=${search.value}&status=${status.value}&gender=${gender.value}&species=${species.value}`
      const response: AxiosResponse<ApiResponse> = await axios.get(url || uri)
      if (response.status === 200) {
        apiResponse.value = response.data as ApiResponse
      } else if (response.status === 404) {
        console.log('No data found')
      } else {
        console.log('Unexpected response status:', response.status)
      }
    } catch (err) {
      console.error('An error occurred:', err)
    } finally {
      isFetching.value = false
    }
  }

  const fetchUrlForCharacter = async <T>(url: string): Promise<T | null> => {
    if (isFetching.value) return null
    isFetching.value = true
    try {
      const response: AxiosResponse<T> = await axios.get(url)
      if (response.status === 200) {
        return response.data
      } else if (response.status === 404) {
        console.log('No data found')
      } else {
        console.log('Unexpected response status:', response.status)
      }
    } catch (err) {
      console.error('An error occurred:', err)
    } finally {
      isFetching.value = false
    }
    return null
  }

  return {
    pageNumber,
    search,
    status,
    gender,
    species,
    apiResponse,
    characters,
    paginationInfo,
    isFetching,
    fetchUrl,
    fetchUrlForCharacter
  }
})
