const express = require("express");
const app = express();

const users = [
  { id: 1, name: "user " },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3" },
  { id: 4, name: "user 4" },
  { id: 5, name: "user 5" },
  { id: 6, name: "user 6" },
  { id: 7, name: "user 7" },
  { id: 8, name: "user 8" },
  { id: 9, name: "user 9" },
  { id: 10, name: "user 10" },
  { id: 11, name: "user 11" },
  { id: 12, name: "user 12" },
  { id: 13, name: "user 13" },
  { id: 14, name: "user 14" },
  { id: 15, name: "user 15" },
  { id: 16, name: "user 16" },
  { id: 17, name: "user 17" },
  { id: 18, name: "user 18" },
  { id: 19, name: "user 19" },
  { id: 20, name: "user 20" },
  { id: 21, name: "user 21" },
  { id: 22, name: "user 22" },
  { id: 23, name: "user 23" },
  { id: 24, name: "user 24" },
];

app.get("/users", (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  results.nextPage = {
    page: page + 1,
    limit: limit,
  };

  if (startIndex > 0) {
    results.previousPage = {
      page: page - 1,
      limit: limit,
    };
  }

  results.userData = users.slice(startIndex, endIndex); // this will look like { userData [ {}, {} , {} ,] }

  res.json(results);
});

app.listen(5550, () => {
  console.log("i am 5550");
});
