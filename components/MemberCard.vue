<template>
  
  <a :href="member.url.href" class="btn h-full w-full flex gap-3 p-5">
    <img v-if="member.image" class="rounded-3xl w-full h-auto" :src="(member.image.url.toString())" :alt="member.image.description" />
    <div>
      <h3 class="text-secondary text-2xl font-display">{{ member.displayname }}</h3>
      <p class="" v-if="member.description">{{ member.description }}</p>
    </div>
  </a>

  <!-- <a :href="member.url.href" class="btn">
  <div class="card bg-base-300 h-full w-full">
    <img v-if="member.image" class="p-5 rounded-3xl" :src="(member.image.url.toString())" :alt="member.image.description" />
    <div class="card-body">
      <h3 class="card-title">{{ member.displayname }}</h3>
      <p v-if="member.description">{{ member.description }}</p>
    </div>
  </div>
  </a> -->
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { type Member } from "~/members";

defineProps({
  member: {
    required: true,
    type: Object as PropType<Member>,
  },
});
</script>
