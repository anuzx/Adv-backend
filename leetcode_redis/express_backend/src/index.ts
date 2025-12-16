import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on("error", (err) => console.log("Redis Client Error", err));

app.post("/submit", async (req, res) => {
  const problemId = req.body.problemId;
  const code = req.body.code;
  const language = req.body.language;

    try {
      //first argument is name of queue and then the payload
    await client.lPush(
      "submissions",
      JSON.stringify({ code, language, problemId })
    );
    // Store in the database
    res.status(200).send("Submission received and stored.");
  } catch (error) {
    console.error("Redis error:", error);
    res.status(500).send("Failed to store submission.");
  }
});

async function startServer() {
    try {
      //firstly make sure that we are connected to redis
      await client.connect();
      console.log("Connected to Redis");

      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
    } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startServer();
