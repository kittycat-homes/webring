<template>
  <div>
    <h2 class="font-display text-3xl text-primary">who's in here.........</h2>
    <div class="@container">
      <div
        class="grid @xs:grid-cols-2 gap-2 @sm:grid-cols-3 @xl:grid-cols-4 @4xl:grid-cols-6 @7xl:grid-cols-8"
      >
        <MemberCard v-for="member in members" :member="member" />
        <a class="btn h-full p-4 text-3xl" href="./#join"
          ><div
            class="flex aspect-square items-center justify-center rounded-full bg-base-300 p-8"
          >
            <h3 class="text-accent">+<br />You?</h3>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { members } from "~/members";
</script>
