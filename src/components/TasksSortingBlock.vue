<template>
  <section>
    <mark class="sort-type">Только дедлайны</mark>
    <mark class="sort-type">По дате</mark>
    <mark class="sort-type">По названию</mark>
  </section>
</template>

<script>

export default {
  name: "TasksSortingBlock",
}

</script>

<style scoped>

.sort-type {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 5px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
  font-size: 12px;
}

</style>
