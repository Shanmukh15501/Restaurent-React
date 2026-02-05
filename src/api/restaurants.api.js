// src/api/restaurants.api.js
import { extractRestaurants } from "../utils/restaurants.parser";
import { extractRestaurantMenu } from "../utils/restaurants.menu.parser";


export async function getRestaurants(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP " + response.status + ": " + response.statusText);
    }

    let json = await response.json();
    return extractRestaurants(json);

  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}


export async function getRestaurantMenu(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP " + response.status + ": " + response.statusText);
    }

    let json = await response.json();
    return extractRestaurantMenu(json);

  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}