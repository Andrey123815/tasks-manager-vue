<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>

  <main class="app">
    <section class="main-content">
      <RouterView />
    </section>
    <aside class="side-content">
      <nav class="nav-links">
        <RouterLink class="nav-links__link" to="/"><h2 class="ma">Создать заметку</h2></RouterLink>
        <RouterLink class="nav-links__link" to="/history"><h2 class="ma">История заметок</h2></RouterLink>
      </nav>
    </aside>
  </main>

</template>

<style scoped>

.app {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  padding: 20px 40px;
}

.main-content {
  width: 70%;
}

.side-content {
  min-height: 100%;
}

.nav-links {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.nav-links__link {
  min-width: 100%;
  height: 40px;
  border: 1px solid grey;
}

.ma {
  margin: auto;
}

</style>
