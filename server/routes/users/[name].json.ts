import { members } from "~/members";

export default defineEventHandler(async (event) => {
  event.node.res.setHeader("content-type", "text/json");
  event.node.res.end(JSON.stringify(members));
});
