import { createClient } from "redis";

async function main() {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  const res = await client.xReadGroup("usa", "usa-1", {
    key: "betteruptime:websites",
    id:">"
  }, {
    COUNT:2
  })
  console.log(res?.valueOf());

  client.destroy();
}

main();
