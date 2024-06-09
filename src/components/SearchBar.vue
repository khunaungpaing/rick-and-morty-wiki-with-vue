<script setup lang="ts">
import { useCharactersStore } from '@/stores/charactersStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const store = useCharactersStore()
const { search, status, gender, species } = storeToRefs(store)

watch(search, () => {
  store.fetchUrl(null)
})
watch(status, () => {
  store.fetchUrl(null)
})
watch(gender, () => {
  store.fetchUrl(null)
})
watch(species, () => {
  store.fetchUrl(null)
})
</script>
<template>
  <section class="filter-section">
    <div class="search-wrapper">
      <i class="bx bx-search"></i>
      <input type="text" placeholder="Search" v-model="search" />
    </div>
    <!--filter-->
    <div class="filter-item">
      <span>Species </span>
      <select v-model="species">
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Mytholog">Mytholog</option>
        <option value="Alien">Alien</option>
        <option value="Animal">Animal</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="filter-item">
      <span>Gender </span>
      <select v-model="gender">
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="filter-item">
      <span>Status </span>
      <select v-model="status">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
    <!--end filter-->
  </section>
</template>

<style scoped>
.filter-section {
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row-reverse;
  margin-top: 1em;
  gap: 1em;
}

.search-wrapper {
  position: relative;
}
.search-wrapper input {
  width: 100%;
  padding-block: 0.8em;
  padding-left: 3em;
  padding-right: 0.8em;
  border: 1px solid var(--color-background);
  border-radius: 0.5em;
  outline: none;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  font-size: 1rem;
  min-width: 15em;
  width: 20em;
}
.search-wrapper i {
  position: absolute;
  top: 50%;
  left: 1em;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--color-text);
}
.filter-item select {
  padding: 0.8em 0.8em 0.8em 1em;
  border: 1px solid var(--color-background);
  border-radius: 0.5em;
  outline: none;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  font-size: 1rem;
  width: 10em;
}
</style>
