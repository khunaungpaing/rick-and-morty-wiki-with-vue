<template>
  <section class="card-wrapper">
    <img src="../assets/logo.svg" alt="img" width="300" height="300" />
    <div class="card-body">
      <h1 class="card-title">Card Title</h1>
      <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
  </section>
</template>

<style scoped>
.card-wrapper {
  max-width: 310px;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.2rem;
}

.card-wrapper:hover {
  box-shadow: 0.2rem 0.2rem 0.2rem var(--color-shadow);
}

.card-wrapper img {
  object-fit: cover;
  border-radius: 0.4rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 0.2em 1em 1em 1em;
  border-radius: 0 0 0.3rem 0.3rem;
  background-color: var(--color-background-soft);
}
.card-text {
  line-height: 1rem;
}
</style>
