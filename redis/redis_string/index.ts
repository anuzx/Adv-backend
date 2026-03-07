import { client, connectRedis } from "./client";

async function main() {
  await connectRedis();

  await client.set("name:1", "icarus");

  const value = await client.get("name:1");

  await client.expire("name:1", 10) //expires in 10 seconds 
  console.log(value);
}

main();
