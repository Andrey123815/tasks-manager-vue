<template>
  <div class="task-creator">
    <div class="form-control">
      <input type="text" placeholder="Введите название заметки" />
    </div>
    <section>
      <button class="btn">Создать заметку</button>
      <button class="btn">Установить дедлайн</button>
    </section>
  </div>
</template>


<script>

export default {
  name: "TaskCreator"
}

</script>


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

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  /*opacity: 0.8;*/
  color: white;
  background: #42b983;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1!important;
  background: #eee!important;
  border-color: #ddd!important;
  color: #999!important;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
  background: #42b983;
  color: #fff;
}

.btn.danger {
  background: #e53935;
  color: #fff;
  border-color: #e53935;
}

.btn.warning {
  background: #c25205;
  color: #fff;
  border-color: #c25205;
}

</style>
