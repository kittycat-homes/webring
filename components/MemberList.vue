<template>
  <div>
    <MemberCard v-for="member in members" :member="member" />
  </div>
</template>

<script setup lang="ts">
import { members } from "~/members";
</script>
