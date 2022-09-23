<script setup lang="ts">
import TaskCreator from "@/components/TaskCreator.vue";
import TasksSortingBlock from "@/components/TasksSortingBlock.vue";
import TasksList from "@/components/TasksList.vue";
</script>


<template>
  <main class="container pt-5">
    <div class="card">
      <header>
        <h2>Создайте заметку</h2>
      </header>
      <TaskCreator />

      <hr style="margin-top: 15px; margin-bottom: 30px" />

      <header>
        <h2>Мои заметки</h2>
      </header>
      <TasksSortingBlock />
      <TasksList />
      </div>
  </main>
</template>


<style>
.card {
  overflow: hidden;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
</style>
