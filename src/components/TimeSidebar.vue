<template>
  <div class="m-4">
    <section id="profilecard" class="px-6 pt-10 rounded-lg pb-14">
      <article class="mb-8 border-2 border-white rounded-full avatar">
        <img src="/img/image-jeremy.png" alt="Avatar Jeremy Robson" />
      </article>
      <article>
        <div class="profile-report-for">Report for</div>
        <div class="profile-name">Jeremy Robson</div>
      </article>
    </section>
    <section id="navbar" class="px-6 pt-10 pb-6 rounded-lg">
      <ul v-for="interval in timeIntervals" :key="interval.id">
        <li
          :class="{ highlight: interval.content === highlightInterval }"
          @click="navigateTime(interval.content)"
        >
          {{ interval.content }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { timeIntervals } from "../utils/timeIntervals";
import { ref, Ref } from "vue";

const props = defineProps({
  defaultInterval: { type: String, required: true },
});

var highlightInterval: Ref<string> = ref(props.defaultInterval);

const emit = defineEmits<{
  (e: "navigateInterval", sendInterval: string): void;
}>();

function navigateTime(sendInterval: string): void {
  highlightInterval.value = sendInterval;
  emit("navigateInterval", sendInterval);
}
</script>

<style scoped>
#profilecard {
  background-color: var(--primary);
  z-index: 5;
  position: relative;
}

.avatar {
  height: 80px;
  width: 80px;
}

.profile-name {
  font-size: var(--font-medium);
  font-weight: 300;
  line-height: 2.5rem;
}

.profile-report-for {
  color: var(--blue-100);
}

#navbar {
  background-color: var(--blue-300);
  z-index: 1;
  position: relative;
  top: -20px;
}

#navbar li {
  color: var(--blue-100);
  cursor: pointer;
  @apply my-3;
}

#navbar li:hover,
#navbar li.highlight {
  color: var(--white);
}
</style>
