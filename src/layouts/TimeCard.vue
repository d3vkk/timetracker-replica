<template>
  <div class="m-4">
    <section
      class="flex flex-row justify-end pr-4 rounded-lg upper-image"
      :style="{ backgroundColor: singleTime.ui.color }"
    >
      <div v-html="singleTime.ui.icon"></div>
    </section>
    <section class="p-6 rounded-lg details-cover">
      <article class="flex flex-row items-center justify-between pb-3">
        <div>{{ singleTime.content.title }}</div>
        <div v-html="iconEllipsis"></div>
      </article>
      <article class="flex flex-row lg:flex-col md:flex-col">
        <div class="details-timeframe-current">
          {{ singleTime.content.timeframes.weekly.current }}hrs
        </div>
        <div class="details-timeframe-previous">
          Last Week - {{ singleTime.content.timeframes.weekly.previous }}hrs
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { iconEllipsis } from "../utils/icons";

const props = defineProps({ singleTime: { type: Object, required: true } });
</script>

<style scoped>
.upper-image {
  z-index: 1;
  position: relative;
  height: 60px;
}
.details-cover {
  background-color: var(--blue-300);
  z-index: 5;
  position: relative;
  top: -10px;
}
.details-cover:hover {
  background-color: var(--blue-200);
  transition: all 0.25s ease;
}

.details-timeframe-current {
  font-size: var(--font-big);
  font-weight: 300;
}

.details-timeframe-previous {
  color: var(--blue-100);
}
</style>
