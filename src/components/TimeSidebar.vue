<template>
  <div class="m-4">
    <div id="profilecard" class="pt-10 pb-14 px-6 rounded-lg">
      <div class="avatar rounded-full border-white border-2 mb-8">
        <img
          src="/img/timetracker/image-jeremy.png"
          alt="Avatar Jeremy Robson"
        />
      </div>
      <div>
        <div class="profile-report-for">Report for</div>
        <div class="profile-name">Jeremy Robson</div>
      </div>
    </div>
    <ul id="navbar" class="pt-10 pb-6 px-6 rounded-lg">
      <li>Daily</li>
      <li>Weekly</li>
      <li>Monthly</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

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
#navbar li:hover {
  color: var(--white);
}
</style>
