<template>
  <main class="container pt-5">
    <div class="card">
      <header>
        <h2>Создайте заметку</h2>
      </header>
      <TaskCreator/>

      <hr style="margin-top: 15px; margin-bottom: 30px"/>

      <header>
        <h2>Мои заметки</h2>
      </header>
      <TasksSortingBlock @handle-filters-change="applyNewFilters"/>
      <TasksList :filters="filters"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import TaskCreator from "@/components/TaskCreator.vue";
import TasksSortingBlock from "@/components/TasksSortingBlock.vue";
import TasksList from "@/components/TasksList.vue";
import {reactive} from "vue";
import type {IFilter} from "@/configurations/filter";

const ONLY_DEADLINES = 0;
const WITHOUT_DEADLINES = 1;
const SORT_BY_DATE = 2;
const SORT_BY_NAME = 3;

const filters = reactive({
  onlyDeadlines: false,
  withoutDeadlines: false,
  sortByDate: false,
  sortByName: false,
} as IFilter);

function applyNewFilters(state: boolean[]) {
  filters.onlyDeadlines = state[ONLY_DEADLINES];
  filters.withoutDeadlines = state[WITHOUT_DEADLINES];
  filters.sortByDate = state[SORT_BY_DATE];
  filters.sortByName = state[SORT_BY_NAME];
}

</script>

<style>
.card {
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
</style>
