<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router";
import AppBar from "@/components/AppBar.vue";
</script>

<template>

<!--  <header>-->
    <AppBar />
<!--  </header>-->

  <main class="app">
    <section class="main-content">
      <RouterView/>
    </section>
    <aside class="side-content">
      <nav class="nav-links">
        <RouterLink class="nav-links__link" to="/">
          <h2 class="ma">Мои заметки</h2>
        </RouterLink>
        <RouterLink class="nav-links__link" to="/history">
          <h2 class="ma">Архив заметок</h2>
        </RouterLink>
        <RouterLink class="nav-links__link" to="/">
          <h2 class="ma">Выйти из аккаунта</h2>
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
  width: calc(100vw * 0.2 - 20px);
  position: absolute;
  right: 0;
  top: 76px;
  border: 1px solid #ccc;
}

.nav-links__link {
  text-decoration: none;
  display: block;
  height: 60px;
  border: 1px solid #ccc;
  line-height: 60px;
  text-align: center;
  color: #444444;
}

.ma {
  margin: auto;
}

</style>
