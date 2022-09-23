<template>
  <ol class="tasks-list">
    <li class="tasks-list__line">
      <div class="ma">Заметка 1</div>
      <div class="ma">До события: <Timer deadline="Sat Sep 24 2022 12:21:44 GMT+0300 (Москва, стандартное время)" /> </div>
      <div class="task-description ma">Утвердить трек лист с руководителем, забрать справки, пройти медосмотр, устроиться на работу</div>
      <SimpleButton class="ma" title="Завершить событие" />
    </li>
  </ol>
</template>


<script setup lang="ts">
import SimpleButton from '../components/SimpleButton.vue';
import Timer from './Timer.vue';
</script>


<style scoped>
.tasks-list {
  counter-reset: li;
  list-style: none;
  font: 14px "Trebuchet MS", "Lucida Sans";
  padding: 4px;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);

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
}

.tasks-list__line:hover {background: #E9E4E0;}
.tasks-list__line:hover:before {transform: rotate(360deg);}
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
  max-width: 550px;
}

.ma {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
