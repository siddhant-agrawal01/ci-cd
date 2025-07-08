import express from "express";
import { client } from "@repo/db/client";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/sighup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  client.user.creat({
    username,
    password,
  });
  res.json({
    message:"sighup success",
    id:username.id
  }).
});
app.listen(3000);
