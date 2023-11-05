const express = require("express");
const rout = express.Router();

rout.get("/", (req, res) => res.send("Route for Admin view"));
rout.get("/create", (req, res) => res.send("Route for admin/create view"));
rout.post("/create", (req, res) =>
  res.send("Route for admin/create view pero post")
);
rout.get("/edit/:id", (req, res) =>
  res.send("Route for admin/edit id pero get ")
);

rout.put("/edit/:id", (req, res) =>
  res.send("Route for admin/edit/:id pero put")
);
rout.delete("/delete/:id", (req, res) =>
  res.send("Route for admin delete id view")
);

module.exports = rout;
