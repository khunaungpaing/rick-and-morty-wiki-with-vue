<script setup lang="ts">
import { onMounted } from 'vue'
import CardList from '@/components/CardList.vue'
import { useCharactersStore } from '@/stores/charactersStore'

// const characterStore = useCharactersStore()
onMounted(() => {
  //  characterStore.fetchCharacters('https://rickandmortyapi.com/api/location')
})
</script>
<template>
  <h1>Locations</h1>
</template>

<style scoped></style>
