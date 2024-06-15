import express from "express";
import { rentBook } from "../controller/rent.controller.js";

const router = express.Router();

router.post("/", rentBook);

export default router;