<template>
  <div class="icon-bar">
    <a href="#"><i class="fa fa-home"></i></a>
    <a href="#"><i class="fa fa-search"></i></a>
    <a href="#"><i class="fa fa-envelope"></i></a>
    <a href="#"><i class="fa fa-globe"></i></a>
    <ProfileIcon color="#fff"/>
  </div>
</template>

<script setup lang="ts">
import ProfileIcon from '../components/icons/ProfileIcon.vue';
</script>

<style scoped>
.icon-bar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}

.icon-bar a {
  float: left;
  text-align: center;
  width: 20%;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #04AA6D;
}
</style>
