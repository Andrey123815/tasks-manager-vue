<template>
  <ol class="tasks-list">
    <li v-show="applyFilters(task, filters)" v-for="task in sortByAllFilters(tasksList, filters)" class="tasks-list__line">
      <div class="ma">{{ task.name }}</div>
      <div v-if="task.deadline" class="ma">До события:
        <Timer deadline="Sat Sep 24 2022 12:21:44 GMT+0300 (Москва, стандартное время)"/>
      </div>
      <div v-else class="ma">Не имеет установленного дедлайна</div>
      <div class="task-description ma">{{ task.description }}</div>
      <SimpleButton class="ma"
                    :title="task.deadline ? 'Завершить событие' : 'Удалить заметку'"
                    :theme="task.deadline ? 'primary' : 'orange'"
                    width="220px"/>
    </li>
  </ol>
</template>

<script setup lang="ts">
import SimpleButton from '../components/SimpleButton.vue';
import Timer from './Timer.vue';
import type {IFilter} from "@/configurations/filter";
import type {ITask} from "@/configurations/task";

interface Props {
  filters: IFilter
}

function applyFilters(task: ITask, filters: IFilter): boolean {
  if (task.deadline && filters.withoutDeadlines) return false;

  return !(!task.deadline && filters.onlyDeadlines);
}

function singleSort(tasks: ITask[],
                    sortBy: 'sortByDate' | 'sortByName',
                    taskField: 'name' | 'deadline' | 'description' | 'creationDate',
                    sortDirection: 1 | -1) {
  if (filters[sortBy]) {
    tasks.sort((task1, task2) => Date.parse(task1[taskField]) > Date.parse(task2[taskField]) ? sortDirection : sortDirection * (-1));
  }
}

function sortByAllFilters(tasks: ITask[], filters: IFilter) {
  singleSort(tasks, 'sortByDate', 'creationDate', filters.sortDirection ? -1 : 1);
  singleSort(tasks, 'sortByName', 'name', filters.sortDirection ? -1 : 1);

  return tasks;
}

const {filters} = defineProps<Props>();
const tasksTestCaseList: ITask[] = [
  {
    name: 'Заметка 1',
    deadline: "Mon Sep 19 2022 12:21:44 GMT+0300 (Москва, стандартное время)",
    description: 'Утвердить трек лист с руководителем, забрать справки, пройти медосмотр, устроиться на работу',
    creationDate: "Mon Sep 19 2022 12:21:44 GMT+0300 (Москва, стандартное время)",
  },
  {
    name: 'Заметка 2',
    deadline: "",
    description: 'Утвердить трек лист с руководителем, забрать справки, пройти медосмотр, устроиться на работу',
    creationDate: "Tue Sep 20 2022 12:21:44 GMT+0300 (Москва, стандартное время)",
  },
  {
    name: 'Заметка 3',
    deadline: "Sat Sep 24 2022 12:52:44 GMT+0300 (Москва, стандартное время)",
    description: 'Утвердить трек лист с руководителем, забрать справки, пройти медосмотр, устроиться на работу',
    creationDate: "Wen Sep 21 2022 12:21:44 GMT+0300 (Москва, стандартное время)",
  },
  {
    name: 'Заметка 4',
    deadline: "Sat Sep 24 2022 12:59:44 GMT+0300 (Москва, стандартное время)",
    description: 'Утвердить трек лист с руководителем, забрать справки, пройти медосмотр, устроиться на работу',
    creationDate: "Fri Sep 23 2022 12:21:44 GMT+0300 (Москва, стандартное время)",
  },
];
const tasksList = sortByAllFilters(tasksTestCaseList, filters);

</script>

<style scoped>
.tasks-list {
  counter-reset: li;
  list-style: none;
  font: 14px "Trebuchet MS", "Lucida Sans";
  padding: 4px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .5);

  margin-top: 30px;
  overflow: auto;
  max-height: 60vh;
  font-size: 18px;
}

.tasks-list__line {
  position: relative;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  justify-items: center;

  margin-bottom: 20px;
  padding: .4em .4em .4em 2em;
  background: #DAD2CA;
  color: #444;
  text-decoration: none;
  border-radius: .3em;
  transition: .3s ease-out;
  z-index: 1000;
}

.tasks-list__line:hover {
  background: #E9E4E0;
}

.tasks-list__line:hover:before {
  margin-left: 10px;
  animation: 0.4s ease-in-out alternate forwards
}

.tasks-list__line:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -1.3em;
  top: 50%;
  margin-top: -1.3em;
  background: #8FD4C1;
  height: 2em;
  width: 2em;
  line-height: 2em;
  border: .3em solid white;
  text-align: center;
  font-weight: bold;
  border-radius: 2em;
  transition: all .3s ease-out;
}

.tasks-list li {
  margin-left: 15px;
  margin-top: 20px;
}

.task-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 450px;
}

li div {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
