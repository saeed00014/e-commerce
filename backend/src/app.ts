import express from "express";

const app = express();

const port = 3000
const hostname = "localhost"

app.use("/", () => {
  console.log("yo yo o oy ")
})

app.listen(port , () => {
  console.log(`http://${hostname}:${port}`)
})
