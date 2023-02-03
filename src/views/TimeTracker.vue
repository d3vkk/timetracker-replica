<template>
  <div id="timetracker">
    <section class="p-10 grid grid-cols-3">
      <article
        v-for="singleTime in timeCardData"
        :key="singleTime.content.title"
      >
        <TimeCard :singleTime="singleTime" />
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import "../assets/css/timetracker.css";
import TimeCard from "../layouts/TimeCard.vue";
import { timeCardData } from "../utils/timeCardData";
</script>

<style scoped>
#timetracker {
  background-color: var(--blue-400);
  color: var(--white);
  height: 100vh;
}
</style>
