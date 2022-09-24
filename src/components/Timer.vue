<template>
<span>
  {{currentTime}}
</span>
</template>

<script setup lang="ts">
import {onBeforeUnmount, ref} from "vue";
import {getTimeRemaining, getDiffTime} from "@/libs/Timer";

interface Props {
  deadline: string
}

const {deadline} = withDefaults(defineProps<Props>(), {deadline: ''})
const currentTime = ref(getDiffTime(getTimeRemaining(deadline, new Date())));

const updateCurrentTime = () => {
  currentTime.value = getDiffTime(getTimeRemaining(deadline, new Date()));
};

onBeforeUnmount(() => {
  clearInterval(updateTimeInterval);
});

const updateTimeInterval = setInterval(updateCurrentTime, 1000);
</script>

<style scoped>

</style>
