<script setup lang="ts">
import type { Character } from '@/stores/types'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
    default: null
  }
})
const router = useRouter()
const goToDetails = () => {
  if (props.character == null) return
  router.push({ name: 'CardDetails', params: { id: props.character.id } })
}
</script>

<template>
  <section class="card-wrapper" @click="goToDetails">
    <div>
      <span class="badge" :class="character.status">{{ character.status }}</span>
      <img :src="character.image" alt="img" width="300" height="300" />
    </div>
    <div class="card-body">
      <h1 class="card-title">{{ character.name }}</h1>
      <p class="card-text"><i class="bx bx-current-location"></i> {{ character.location?.name }}</p>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.card-wrapper {
  position: relative;
  max-width: 310px;
  cursor: pointer;
  height: 100%;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.2rem;
  animation: fadeInUp 0.6s ease-out;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.card-wrapper:hover {
  transform: scale(1.02);
  box-shadow: 0.2rem 0.2rem 0.2rem var(--color-shadow);
}
.card-wrapper .badge {
  position: absolute;
  color: white;
  padding: 0.1em 0.2em;
  border-radius: 0.2rem;
  top: 0.7em;
  right: 0.7em;
}

.card-wrapper img {
  object-fit: cover;
  border-radius: 0.4rem 0.4rem 0 0;
}

.card-body {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0.2em 1em 1em 1em;
  border-radius: 0 0 0.3rem 0.3rem;
  background-color: var(--color-background-soft);
}

.card-title {
  margin: 0;
  font-size: 24px;
  color: var(--color-heading);
}

.card-text {
  line-height: 1rem;
  margin: 8px 0 0;
  font-size: 16px;
  align-items: middle;
}
</style>
