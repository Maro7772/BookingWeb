import { Router } from "express";
import {
  getRestaurantsAvailability,
  getFeaturedRestaurants,
  getRestaurants,
  getRestaurantBySlug,
} from "../controllers/restaurantController.js";

const restaurantRouter = Router();

restaurantRouter.get("/", getRestaurants);
restaurantRouter.get("/featured", getFeaturedRestaurants);
restaurantRouter.get("/:slug", getRestaurantBySlug);
restaurantRouter.get("/:id/availability", getRestaurantsAvailability);

export default restaurantRouter;
