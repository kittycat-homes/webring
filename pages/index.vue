<template>
  <div class="grid min-h-screen gap-5 p-5">
    <h1
      class="pb-32 pt-32 text-center font-display text-4xl text-primary md:text-5xl lg:text-7xl"
    >
      kittycat dot homes webring™
    </h1>
    <div class="flex flex-col gap-5 lg:flex-row-reverse">
      <MemberList class="flex-1 flex-grow-[5] p-5" />
      <div class="flex-1 flex-grow-[2] p-5 @container">
        <div class="grid w-full gap-5 @4xl:grid-cols-3">
          <AboutWebsite class="@4xl:col-span-2" />
        </div>
      </div>
    </div>
    <JoinWebring class="p-5" />
    <footer class="text-center text-sm">
      kittycats rule teh world forevah © 2024
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" });
useHead({ title: "kittycat dot homes webring" });
</script>
