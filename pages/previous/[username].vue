<template>
    <div class="flex h-full min-h-screen w-full items-center justify-center">
      <a class="link" :href="relation.last.url"
        >click here if redirection doesn't work</a
      >
    </div>
  </template>
  
  <script setup lang="ts">
  import { memberInRelation, members } from "~/members";
  definePageMeta({
    layout: "iframe",
  });
  const route = useRoute();
  const memberName = route.params.username.toString();
  const memberIndex = members.findIndex((member) => {
    return member.username === memberName;
  });
  const relation = memberInRelation(memberIndex);
  await navigateTo(relation.last.url, { external: true });
  </script>
  