import { equalDataError } from "../errors/equal.data.js";
import { notFoundError } from "../errors/not.found.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";

async function create(origin, destination, date) {
  if (origin == destination) {
    throw equalDataError("Origin and destination");
  }

  const {
    rows: [origExist],
  } = await citiesRepositories.readCityById(origin);

  if (!origExist) throw notFoundError("Origin");

  const {
    rows: [destExist],
  } = await citiesRepositories.readCityById(destination);

  if (!destExist) throw notFoundError("Destination");

  const [day, month, year] = date.split("-");
  const formattedDate = new Date(`${year}-${month}-${day}`);

  await flightsRepositories.create(origin, destination, formattedDate);
}

export const flightsServices = { create };