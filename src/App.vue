<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import { useCharactersStore } from '@/stores/charactersStore'
import { storeToRefs } from 'pinia'

const theme = ref<string>(localStorage.getItem('theme') || 'dark')
const store = useCharactersStore()
const { search, pageNumber } = storeToRefs(store)

watch(search, () => {
  pageNumber.value = 1
  store.fetchUrl(null)
})

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

const themeLabel = computed(() =>
  theme.value === 'dark' ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>"
)
</script>

<template>
  <section class="container">
    <header>
      <RouterLink to="/" class="LOGO">RICK & MORTY <span class="bold">WIKI</span></RouterLink>
      <RouterLink to="/" class="LOGO1">R&M<span class="bold">WIKI</span></RouterLink>
      <div class="search-wrapper">
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search" v-model="search" />
      </div>
      <div class="mode-btn" @click="toggleTheme" v-html="themeLabel"></div>
    </header>

    <RouterView />
  </section>
</template>

<style scoped>
.container {
  margin: 0 2rem;
}

header {
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1em;
  color: var(--color-heading);
  background-color: var(--color-background-mute);
  font-family: var(--color-border);
  text-transform: uppercase;
  text-align: center;
  margin-top: 1em;
  box-shadow: 0.1em 0.2em 0.1em var(--color-shadow);
  border-radius: 0.5rem;
}
.wrapper nav {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1em;
}
.LOGO {
  font-size: 2rem;
  text-decoration: none;
}
.LOGO1 {
  display: none;
  font-size: clamp(0.7rem, 1rem, 1.5rem);
}
.bold {
  font-weight: bold;
}
.mode-btn {
  font-size: 1.3rem;
  cursor: pointer;
}

.search-wrapper {
  position: relative;
}
.search-wrapper input {
  padding-block: 0.8em;
  padding-left: 3em;
  padding-right: 0.8em;
  border: 1px solid var(--color-background);
  border-radius: 0.5em;
  outline: none;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  min-width: 15em;
  width: 20em;
  box-shadow: inset 0.1em 0.1em var(--color-shadow);
}
.search-wrapper i {
  position: absolute;
  top: 50%;
  left: 1em;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .LOGO {
    display: none;
  }
  .LOGO1 {
    display: block;
  }
  .search-wrapper input {
    padding-block: 0.8em;
    padding-left: 2em;
    padding-right: 0.3em;
    border: 1px solid var(--color-background);
    border-radius: 0.4em;
    outline: none;
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 0.8rem;
    min-width: 100%;
    width: 100%;
    box-shadow: inset 0.1em 0.1em var(--color-shadow);
  }
  .search-wrapper i {
    top: 50%;
    left: 0.7em;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: var(--color-text);
  }
}

@media (max-width: 375px) {
  .LOGO {
    display: none;
  }
}
</style>
