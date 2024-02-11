<template>
  <div>dsklfksdjfklsdjf</div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { type Member } from "~/members";

defineProps({
  member: {
    required: true,
    type: Object as PropType<Member>
  }
});
</script>
