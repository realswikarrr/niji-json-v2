import express from "express";
import rentItems from "./rentItems.js";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

// All routes in here are starting with /buyContent
router.get("/", (req, res) => {
  res.send(rentItems);
});

router.post("/", (req, res) => {
  const newItem = req.body;

  rentItems.push({ ...newItem, id: uuidv4() });
  res.send(rentItems);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundItem = rentItems.find((item) => item.id === id);
  res.send(foundItem);
});

export default router;
