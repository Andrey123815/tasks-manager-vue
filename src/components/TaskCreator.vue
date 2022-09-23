<script setup lang="ts">
import SimpleButton from '../components/SimpleButton.vue';
</script>


<template>
  <div class="task-creator">
    <div class="form-control">
      <input type="text" placeholder="Введите название заметки" />
    </div>
    <section>
      <SimpleButton title="Создать заметку" theme="primary" />
      <SimpleButton title="Установить дедлайн" theme="orange" />
    </section>
  </div>
</template>


<style scoped>

.task-creator {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
}

.form-control {
  position: relative;
  margin-bottom: 0.5rem;

  min-width: 50%;
}

.form-control input,
.form-control select {
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
}

.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}

.form-control input:active,
.form-control input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
}

</style>
