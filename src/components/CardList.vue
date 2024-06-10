<script setup lang="ts">
import { useCharactersStore } from '@/stores/charactersStore'
import CardComponent from './CardComponent.vue'
import { storeToRefs } from 'pinia'

// const props = defineProps({
//   category: {
//     type: String,
//     required: true
//   }
// })
const store = useCharactersStore()
const { isFetching, characters } = storeToRefs(store)
</script>
<template>
  <main>
    <section v-show="isFetching" class="grid-center">
      <div class="loader"></div>
    </section>
    <section v-if="characters != null && !isFetching" class="grid-card">
      <div v-for="character in characters" :key="character.id">
        <CardComponent :character="character" />
      </div>
    </section>
    <section v-if="characters == null && !isFetching" class="grid-center">
      <h1>There is no character</h1>
    </section>
  </main>
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
