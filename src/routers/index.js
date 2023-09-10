import { Router } from "express";
import passengerRouter from "./passengers.routes.js";
import citiesRouter from "./cities.routes.js";
import flightsRouter from "./flights.routes.js";

const router = Router();

router.use(passengerRouter);
router.use(citiesRouter);
router.use(flightsRouter);

export default router;
