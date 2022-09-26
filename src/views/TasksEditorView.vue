<template>
  <main v-if="!auth">
    <input v-model="username" type="text" placeholder="Введите email"/>
    <input v-model="password" type="text" placeholder="Введите пароль"/>
    <SimpleButton title="Зарегистрироваться" @click="handleRegister"/>
    <SimpleButton title="Войти" @click="handleLogin"/>
  </main>
  <main v-else class="container pt-5">
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
import {reactive, ref} from "vue";
import type {IFilter} from "@/configurations/filter";
import SimpleButton from "@/components/SimpleButton.vue";
import API from '@/configurations/network';

const ASC_DIRECTION = false;

const ONLY_DEADLINES = 0;
const WITHOUT_DEADLINES = 1;
const SORT_BY_DATE = 2;
const SORT_BY_NAME = 3;
const SORT_DIRECTION = 4;

function applyNewFilters(state: boolean[]) {
  filters.onlyDeadlines = state[ONLY_DEADLINES];
  filters.withoutDeadlines = state[WITHOUT_DEADLINES];
  filters.sortByDate = state[SORT_BY_DATE];
  filters.sortByName = state[SORT_BY_NAME];
  filters.sortDirection = state[SORT_DIRECTION];
}

const handleLogin = async () => {
  auth.value = await API.login(username.value, password.value);
}

const handleRegister = async () => {
  auth.value = await API.register(username.value, password.value);
}

const filters = reactive({
  onlyDeadlines: false,
  withoutDeadlines: false,
  sortByDate: false,
  sortByName: false,
  sortDirection: ASC_DIRECTION
} as IFilter);

const auth = ref(false);
const username = ref('');
const password = ref('');

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
