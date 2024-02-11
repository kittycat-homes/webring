import { doesMemberAndPathMatch, memberInRelation, members } from "~/members";

export default defineEventHandler(async (event) => {
  const memberIndex = members.findIndex((member) => {
    return doesMemberAndPathMatch(member, event.path);
  });
  const memberRelation = memberInRelation(memberIndex);
  event.node.res.setHeader("content-type", "application/json");
  event.node.res.end(JSON.stringify(memberRelation));
});
