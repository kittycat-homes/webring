import { doesMemberAndPathMatch, memberInRelation, members } from "~/members";

export default defineEventHandler(async (event) => {
  event.node.res.setHeader("content-type", "application/json");
  event.node.res.end(JSON.stringify(members));
});
