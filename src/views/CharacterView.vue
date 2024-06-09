<script setup lang="ts">
import { onMounted } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import CardList from '@/components/CardList.vue'
import { useCharactersStore } from '@/stores/charactersStore'
const categroy = 'character'
const characterStore = useCharactersStore()
onMounted(() => {
  characterStore.fetchCharacters(null)
})
</script>
<template>
  <SearchBar />
  <CardList :category="categroy" />
</template>

<style scoped></style>
