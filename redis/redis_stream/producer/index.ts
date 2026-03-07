import { createClient } from "redis";

async function main() {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  const res = await client.xAdd("betteruptime:websites", "*", {
    url: "https://facebook.com",
    id: "1",
  });
  console.log(res);

  client.destroy();
}

main();

//XREAD COUNT 10 STREAMS betteruptime:websites 0 -> to read

//to create two consumers :
//XGROUP CREATE betteruptime:websites india $
//XGROUP CREATE betteruptime:websites usa $

//to read as a consumer group 
//XREADGROUP GROUP india india-1 COUNT 10 STREAMS betteruptime:websites >
