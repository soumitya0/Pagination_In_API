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

const post = [
  { id: 1, name: "post 1" },
  { id: 2, name: "post 2" },
  { id: 3, name: "post 3" },
  { id: 5, name: "post 5" },
  { id: 6, name: "post 6" },
  { id: 4, name: "post 4" },
  { id: 7, name: "post 7" },
  { id: 8, name: "post 8" },
  { id: 9, name: "post 9" },
  { id: 10, name: "post 10" },
  { id: 11, name: "post 11" },
  { id: 12, name: "post 12" },
  { id: 13, name: "post 13" },
  { id: 14, name: "post 14" },
  { id: 15, name: "post 15" },
  { id: 16, name: "post 16" },
  { id: 17, name: "post 17" },
  { id: 18, name: "post 18" },
  { id: 19, name: "post 19" },
  { id: 20, name: "post 20" },
  { id: 21, name: "post 21" },
  { id: 22, name: "post 22" },
  { id: 23, name: "post 23" },
  { id: 24, name: "post 24" },
];

app.get("/post", paginatedMiddleware(post), (req, res) => {
  res.json(res.paginatedMiddlewareResult);
});

app.get("/users", paginatedMiddleware(users), (req, res) => {
  res.json(res.paginatedMiddlewareResult);
});

function paginatedMiddleware(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < model.length) {
      results.nextPage = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previousPage = {
        page: page - 1,
        limit: limit,
      };
    }

    results.resultData = model.slice(startIndex, endIndex); // this will look like { userData [ {}, {} , {} ,] }

    res.paginatedMiddlewareResult = results; //save this so that we can access in api's

    next();
  };
}

app.listen(5550, () => {
  console.log("i am 5550");
});
