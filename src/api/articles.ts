/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/quotes */
import express from "express";
import { extract } from "@extractus/article-extractor";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get(`/:url(*)`, async (req, res) => {
  let link = req.params.url;
  console.log("link", link);
  try {
    const article = await extract(link);
    console.log(article);
    res.json(article);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error extracting article");
  }
});

export default router;
