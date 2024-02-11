<template>
  <a :href="member.url" class="btn flex h-full w-full gap-3 p-5">
    <img
      v-if="member.image"
      class="h-auto w-full rounded-3xl"
      :src="member.image.url.toString()"
      :alt="member.image.description"
    />
    <div class="flex flex-col gap-1">
      <div class="flex flex-row flex-wrap items-center justify-center gap-1">
        <h3 class="font-display text-2xl text-secondary">
          {{ member.displayname }}
        </h3>
        <div class="badge badge-outline h-auto p-1">{{ member.pronouns }}</div>
      </div>
      <p class="" v-if="member.description">{{ member.description }}</p>
    </div>
  </a>
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
