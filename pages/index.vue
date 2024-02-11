<template>
  <div class="grid min-h-screen gap-5 p-5 @container">
    <h1 class="font-display text-7xl text-primary">kittycat.homes webring™</h1>
    <div class="flex flex-col gap-5 lg:flex-row">
      <MemberList class="flex-grow-[14] flex-1" />
      <div class="flex-grow-[3] grid w-full flex-1 gap-5 @7xl:grid-cols-3">
        <AboutWebsite class="@7xl:col-span-2" />
        <JoinWebring />
      </div>
    </div>
    <footer class="text-center text-sm">
      kittycats rule teh world forevah © 2024
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" });
</script>
