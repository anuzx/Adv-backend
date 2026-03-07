import { createClient } from "redis";

export const client = createClient();

client.on("error", (err) => {
  console.log("Redis Client Error", err);
});

export async function connectRedis() {
  await client.connect();
  console.log("Redis connected");
}
