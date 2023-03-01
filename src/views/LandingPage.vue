<template>
  <div id="timetracker" class="grid grid-cols-5 p-10 place-content-center">
    <section class="">
      <TimeSidebar @navigate-interval="navigateInterval" />
    </section>
    <section class="col-start-2 col-end-5">
      <article class="grid grid-cols-3">
        <p v-for="singleTime in timeCardData" :key="singleTime.content.title">
          <TimeCard :singleTime="singleTime" :timeInterval="timeInterval" />
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import TimeSidebar from "../components/TimeSidebar.vue";
import TimeCard from "../layouts/TimeCard.vue";
import { timeCardData } from "../utils/timeCardData";
import { ref } from "vue";
import type { Ref } from "vue";

var timeInterval: Ref<string> = ref("Daily");
function navigateInterval(interval: string): void {
  timeInterval.value = interval;
}
</script>

<style scoped>
#timetracker {
  background-color: var(--blue-400);
  color: var(--white);
  height: 100vh;
}
</style>
