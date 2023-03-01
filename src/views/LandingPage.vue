<template>
  <div
    id="timetracker"
    class="p-10 lg:grid lg:grid-cols-5 place-content-center"
  >
    <section>
      <TimeSidebar
        :defaultInterval="defaultInterval"
        @navigate-interval="navigateInterval"
      />
    </section>
    <section class="col-start-2 col-end-5">
      <article class="grid grid-cols-1 lg:grid-cols-3">
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

const defaultInterval: string = "Daily";
var timeInterval: Ref<string> = ref(defaultInterval);
function navigateInterval(interval: string): void {
  timeInterval.value = interval;
}
</script>

<style scoped>
#timetracker {
  background-color: var(--blue-400);
  color: var(--white);
  height: auto;
}

@media (min-width: 1024px) {
  #timetracker {
    height: 100vh;
  }
}
</style>
