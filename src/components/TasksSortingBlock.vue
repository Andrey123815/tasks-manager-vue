<template>
  <section>
    <mark v-for="(sortType, index) in sortTypes" class="sort-type"
          :class="{'active-state': state[index]}"
          @click="handleFiltersChange(state, index)">
      <span v-if="index <= 3">{{ sortType }}</span>
      <SortDirectionIcon v-else :color="state[index] ? 'white' : '#42B983'"/>
    </mark>
<!--    <mark class="sort-type" style="padding-left: 8px; padding-right: 8px;"-->
<!--          :class="{'active-state': state[index]}"-->
<!--          @click="handleFiltersChange(state, index)">-->
<!--      <SortDirectionIcon />-->
<!--    </mark>-->
  </section>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import SortDirectionIcon from './icons/SortDirectionIcon.vue';

const emit = defineEmits<{
  (e: 'handle-filters-change', state: boolean[]): void
}>();

function handleFiltersChange(state: boolean[], index: number) {
  if (index <= 1) {
    if (state[index]) {
      state[index] = false;
      emit('handle-filters-change', state);
      return;
    }
    state[index] = true;
    state[1-index] = false;
  } else {
    state[index] = !state[index];
  }
  emit('handle-filters-change', state);
}

const sortTypes = ['Только дедлайны', 'Без дедлайнов', 'По дате', 'По названию', 'Реверс сортировки'];
let state = reactive([false, false, false, false, false]);
</script>

<style scoped>

svg {
  position: relative;
  top: 8px;
}

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
  cursor: pointer;
}

.active-state {
  color: white;
  background: #42b983;
}

</style>
