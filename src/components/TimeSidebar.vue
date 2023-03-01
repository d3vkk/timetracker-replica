<template>
  <div class="m-4">
    <section
      id="profilecard"
      class="flex flex-row p-6 rounded-lg lg:px-6 lg:pt-10 lg:block lg:pb-14"
    >
      <article
        class="mr-8 border-2 border-white rounded-full lg:mb-8 lg:mr-0 avatar"
      >
        <img src="/img/image-jeremy.png" alt="Avatar Jeremy Robson" />
      </article>
      <article>
        <div class="profile-report-for">Report for</div>
        <div class="profile-name">Jeremy Robson</div>
      </article>
    </section>
    <section
      id="navbar"
      class="flex flex-row px-6 pt-10 pb-4 rounded-lg lg:pb-6 lg:block"
    >
      <ul v-for="(interval, intervalIndex) in timeIntervals" :key="interval.id">
        <li
          :class="[
            interval.content === highlightInterval ? 'highlight' : '',
            intervalIndex === timeIntervals.length - 1 ? '' : 'mr-6',
          ]"
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
  font-size: 1.2rem;
  font-weight: 300;
}

@media (min-width: 500px) {
  .profile-name {
    font-size: var(--font-medium);
    line-height: 2.5rem;
  }
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
