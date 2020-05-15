require("dotenv").config();
const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

  const users = [
    { email: "jelly@gmail.com", 
    password: "password"
   },

    {
      email: "trophy@gmail.com",
      password: "password"
    },
    {
      email: "rocket@gmail.com",
      password: "password"
    }
  ];

    app.post("/api/users", (req, res) => {
      const { email, password } = req.body;
      // db.User.findOne({email: email})
      const foundUserArray = users.filter(user => user.email === email);
      console.log(foundUserArray);
      if(foundUserArray.length > 0) {
        res.json(foundUserArray[0])
      }else {
        res.status(400);
        res.json({
            message: "No user found with that email",
            data: null,
         });
        }
        res.json
    });



app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
