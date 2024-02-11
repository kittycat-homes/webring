<template>
  <div class="@container">
    <div class="grid grid-cols-1 gap-5 @xs:grid-cols-3">
      <a class="btn" :href="relation.last.url.toString()">{{
        relation.last.displayname
      }}</a>
      <a class="btn" href="https://webring.kittycat.homes"
        >kittycat.homes<br />webring</a
      >
      <a class="btn" :href="relation.next.url.toString()">{{
        relation.next.displayname
      }}</a>
    </div>
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
</script>
