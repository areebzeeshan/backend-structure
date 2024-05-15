const express = require("express");
const { dbConnection } = require("./src/Config/db");
const signupRoutes = require('./src/Routes/SignUp.routes')

const app = express();
const port = 4000;

app.use(express.json());

dbConnection();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use('/api', signupRoutes);

app.get("/",(req , res) => {
    res.sendFile("./index.html",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
