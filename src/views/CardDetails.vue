<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Character } from '@/stores/types'
import { useCharactersStore } from '@/stores/charactersStore'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const store = useCharactersStore()
const character = ref<Character>({} as Character)
const isFetching = ref<Boolean>(false)

const url = `https://rickandmortyapi.com/api/character/${props.id}`
onMounted(() => fetchData())
const fetchData = async () => {
  isFetching.value = true
  const data = await store.fetchUrlForCharacter(url)
  if (data) {
    character.value = data as Character
  } else {
    console.log('No data received or an error occurred')
  }
  isFetching.value = false
}
</script>

<template>
  <main>
    <section>
      <img v-show="!isFetching" :src="character.image" :alt="character.name" />
      <div v-show="isFetching" class="placeholder-img"></div>
    </section>
    <section class="details">
      <h1 v-show="!isFetching">{{ character.name }}</h1>
      <div v-show="isFetching" class="placeholder-text long"></div>
      <span v-show="!isFetching" class="badge" :class="character.status">{{
        character.status
      }}</span>
      <div v-show="isFetching" class="placeholder-text"></div>
      <p v-show="!isFetching">{{ character.species }}</p>
      <div v-show="isFetching" class="placeholder-text long"></div>
      <p v-show="!isFetching">{{ character.type }}</p>
      <div v-show="isFetching" class="placeholder-text"></div>
      <p v-show="!isFetching">{{ character.gender }}</p>
      <div v-show="isFetching" class="placeholder-text long"></div>
      <p v-show="!isFetching">{{ character.origin?.name }}</p>
      <div v-show="isFetching" class="placeholder-text"></div>
      <p v-show="!isFetching">{{ character.location?.name }}</p>
      <div v-show="isFetching" class="placeholder-text long"></div>
    </section>
  </main>
</template>
<style scoped>
main {
  display: flex;
  margin-top: 2em;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
main img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 1em;
}
.details h1 {
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-heading);
}

.badge {
  color: white;
  padding: 0.1em 0.2em;
  border-radius: 0.2rem;
}

/* Placeholder styles */
.placeholder-img {
  width: 300px;
  height: 300px;
  border-radius: 1em;
  background: var(--color-text);
  animation: placeholder-shimmer 2.5s infinite linear;
  opacity: 0%;
}

.placeholder-text {
  height: 1.2em;
  width: 15em;
  background: var(--color-text);
  margin-bottom: 0.5em;
  animation: placeholder-shimmer 2.5s infinite linear;
}
.long {
  width: 20em;
}

@keyframes placeholder-shimmer {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
  }
}
</style>
