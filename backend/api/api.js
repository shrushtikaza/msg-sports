import express from "express";
import authRouter from "./auth.js";
import siteSettingRouter from "./site_settings.js";
import eventRouter from "./events.js";
import gamesRouter from "./games.js";
import categoriesRouter from "./categories.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/site_settings", siteSettingRouter);
router.use("/events", eventRouter);
router.use("/games", gamesRouter);
router.use("/categories", categoriesRouter);

export default router;
