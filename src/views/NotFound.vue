<template>
  <section class="grid-center">
    <img src="../assets/404.png" alt="404" width="100" />
  </section>
</template>
<style scoped>
.grid-center {
  display: flex;
  justify-content: center;
  /* width: 100vw; */
}
.grid-center img {
  object-fit: contain;
  width: clamp(100px, 400px, 700px);
}
</style>
