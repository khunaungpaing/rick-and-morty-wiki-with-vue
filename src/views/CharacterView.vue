<script setup lang="ts">
import { onMounted } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import CardList from '@/components/CardList.vue'
import { useCharactersStore } from '@/stores/charactersStore'

const characterStore = useCharactersStore()
onMounted(() => {
  characterStore.fetchCharacters()
})
</script>
<template>
  <SearchBar />
  <CardList />
</template>

<style scoped></style>
