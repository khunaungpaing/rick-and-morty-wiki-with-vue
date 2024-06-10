<script setup lang="ts">
import { useCharactersStore } from '@/stores/charactersStore'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const store = useCharactersStore()
const { status, gender, species, pageNumber } = storeToRefs(store)

const filterActive = ref(false)

const toggleFilter = () => {
  filterActive.value = !filterActive.value
}

watch(status, () => {
  pageNumber.value = 1
  store.fetchUrl(null)
})
watch(gender, () => {
  pageNumber.value = 1
  store.fetchUrl(null)
})
watch(species, () => {
  pageNumber.value = 1
  store.fetchUrl(null)
})
</script>

<template>
  <section class="filter-section">
    <i @click="toggleFilter" class="bx bxs-filter-alt"></i>

    <!--filter-->
    <div :class="['filter-wrapper', { active: filterActive }]">
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
        <span>Gender</span>
        <select v-model="gender">
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="filter-item">
        <span>Status</span>
        <select v-model="status">
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </div>
    <!--end filter-->
  </section>
</template>

<style scoped>
.filter-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row-reverse;
  margin-top: 1em;
  gap: 1em;
}
.filter-section i {
  display: none;
  font-size: 1.5rem;
  color: var(--color-text);
  cursor: pointer;
  margin-right: 1em;
  padding: 0.4em;
  background-color: var(--color-background-mute);
  border-radius: 0.3em;
}

.filter-wrapper {
  display: flex;
  gap: 1em;
}
.filter-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
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

@media (max-width: 768px) {
  .filter-section i {
    display: block;
  }
  .filter-wrapper {
    display: none !important;
    position: absolute;
    flex-direction: column;
    gap: 1em;
    background-color: var(--color-background-mute);
    padding: 2em 1.5em;
    z-index: 99999;
    top: 3em;
    border-radius: 0.3em;
    box-shadow: 1em 1em 3em var(--color-shadow);
  }
  .filter-wrapper.active {
    display: flex !important;
  }
}
</style>
