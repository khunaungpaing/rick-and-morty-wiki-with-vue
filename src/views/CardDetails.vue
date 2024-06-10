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

const url = `https://rickandmortyapi.com/api/character/${props.id}`
onMounted(() => fetchData())
const fetchData = async () => {
  const data = await store.fetchUrlForCharacter(url)
  if (data) {
    character.value = data as Character
  } else {
    console.log('No data received or an error occurred')
  }
}
</script>
<template>
  <main>
    <section>
      <img :src="character.image" :alt="character.name" />
    </section>
    <section class="details">
      <h1>{{ character.name }}</h1>
      <span class="badge" :class="character.status">{{ character.status }}</span>
      <p>{{ character.species }}</p>
      <p>{{ character.type }}</p>
      <p>{{ character.gender }}</p>
      <p>{{ character.origin?.name }}</p>
      <p>{{ character.location?.name }}</p>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  margin-top: 2em;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(300px, 350px));
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

@media (max-width: 767px) {
  main {
    grid-template-columns: repeat(1, minmax(300px, 350px));
  }
}

/* Styles for screens 768px and larger */
@media (min-width: 768px) {
  main {
    grid-template-columns: repeat(2, minmax(300px, 350px));
  }
}
</style>
