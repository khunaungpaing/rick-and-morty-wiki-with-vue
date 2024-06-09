<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const theme = ref<string>(localStorage.getItem('theme') || 'dark')

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
  <header>
    <RouterLink to="/" class="LOGO">RICK & MORTY <span class="bold">WIKI</span></RouterLink>

    <div class="wrapper">
      <nav>
        <RouterLink to="/characters">Characters</RouterLink>
        <RouterLink to="/episodes">Episodes</RouterLink>
        <RouterLink to="/locations">Locations</RouterLink>
        <div class="mode-btn" @click="toggleTheme" v-html="themeLabel"></div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
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
.bold {
  font-weight: bold;
}
.mode-btn {
  font-size: 1.3rem;
  cursor: pointer;
}
</style>
