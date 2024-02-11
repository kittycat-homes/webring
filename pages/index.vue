<template>
  <div class="grid min-h-screen gap-5 p-5">
    <h1 class="font-display text-7xl text-primary">kittycat.homes webring™</h1>
    <div class="flex flex-col gap-5 lg:flex-row-reverse">
      <MemberList class="flex-1 flex-grow-[14] p-5" />
      <div class="flex-1 flex-grow-[3] @container p-5">
        <div class="grid w-full gap-5 @4xl:grid-cols-3">
          <AboutWebsite class="@4xl:col-span-2" />
          <JoinWebring />
        </div>
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
