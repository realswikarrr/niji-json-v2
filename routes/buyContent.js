import express from "express";
import buyContent from "./buyItems.js";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

// All routes in here are starting with /buyContent
router.get("/", (req, res) => {
  res.send(buyContent);
});

router.post("/", (req, res) => {
  const newItem = req.body;

  buyContent.push({ ...newItem, id: uuidv4() });
  res.send(buyContent);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundItem = buyContent.find((item) => item.id === id);
  res.send(foundItem);
});

export default router;
