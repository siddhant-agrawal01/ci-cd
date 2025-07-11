import express from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/sighup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  client.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({
    message: "sighup success",
    id: username.id,
  });
});
app.listen(3002);
