import { createClient } from "redis";

const client = createClient();

async function main() {
  await client.connect(); //redis connection
  //infinite loop because worker will keep checking if new work has came in queue or not
  while (1) {
    const response = await client.brPop("submissions", 0); //blocked pop (unless a new work comes workers will be freezed)
    console.log(response);
    //run the users code using docker exec
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
main();
