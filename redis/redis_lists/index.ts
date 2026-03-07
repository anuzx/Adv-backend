
import { client, connectRedis } from "../redis_string/client.ts";

async function main() {
  await connectRedis();

  //queue
  await client.lPush("message", "hello")
  await client.rPop("message")

  //stack 
  await client.lPush("name", "icarus")
  await client.lPop("name")
}

main();
