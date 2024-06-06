<script setup lang="ts"></script>
<template>
  <section class="filter-section">
    <div class="search-wrapper">
      <i class="bx bx-search"></i>
      <input type="text" placeholder="Search" />
    </div>
  </section>
</template>

<style scoped>
.filter-section {
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row-reverse;
  margin-top: 1em;
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
</style>
