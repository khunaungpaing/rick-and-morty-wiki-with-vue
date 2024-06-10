<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import { useCharactersStore } from '@/stores/charactersStore'
import CardList from '@/components/CardList.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

const store = useCharactersStore()
const dataReady = ref(false)
onBeforeMount(() => {
  store.fetchUrl(null)
  dataReady.value = true
})
</script>
<template>
  <PaginationComponent />
  <SearchBar />
  <CardList />
  <PaginationComponent />
</template>
<style scoped>
main {
  margin-top: 1em;
}
.grid-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 320px));
  grid-gap: 1.5em;
  justify-content: center;
  align-items: stretch;
}
.grid-card div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.grid-center {
  display: grid;
  height: 50vh;
  grid-column: 2/3;
  grid-row: 1/3;
  justify-content: center;
  align-items: center;
}
</style>
