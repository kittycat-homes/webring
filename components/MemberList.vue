<template>
  <div>
    <h2 class="text-3xl font-display text-primary">who's in here.........</h2>
  <div class="@container">
  <div class="grid gap-2 @sm:grid-cols-3">
    <MemberCard v-for="member in members" :member="member" />
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { members } from "~/members";
</script>
