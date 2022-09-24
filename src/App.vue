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
        <RouterLink class="nav-links__link" to="/">
          <h2 class="ma">Мои заметки</h2>
        </RouterLink>
        <RouterLink class="nav-links__link" to="/history">
          <h2 class="ma">Архив заметок</h2>
        </RouterLink>
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
  width: 300px;
  border: 1px solid #DAD2CA;
}

.nav-links__link {
  text-decoration: none;
  display: block;
  height: 60px;
  border: 1px dashed grey;
  line-height: 60px;
  text-align: center;
  color: #444444;
}

.ma {
  margin: auto;
}

</style>
