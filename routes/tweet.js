const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트윗 조회");
});

router.get("/:id", (req, res) => {
  console.log(req.params);

  res.send("특정 트윗 조회");
});

router.update("/:id", (req, res) => {
  res.send("트윗 내용 수정");
});

router.delete("/:id", (req, res) => {
  res.send("트윗 삭제");
});

module.exports = router;
