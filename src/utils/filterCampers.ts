import { Camper } from "../redux/types";
import { FilterState } from "../redux/types";

export const filterCampers = (
  campers: Camper[],
  filters: FilterState
): Camper[] => {
  let filtered = campers;

  if (filters.location) {
    const normalizedLocation = filters.location.toLowerCase().trim();
    filtered = filtered.filter((camper) =>
      camper.location.toLowerCase().includes(normalizedLocation)
    );
  }
  if (filters.equipment && filters.equipment.length > 0) {
    filtered = filtered.filter((camper) => {
      return filters.equipment.every((selectedEq) => {
        switch (selectedEq) {
          case "AC":
            return camper.AC;
          case "automatic":
            return camper.transmission === "automatic";
          case "kitchen":
            return camper.kitchen;
          case "TV":
            return camper.TV;
          case "bathroom":
            return camper.bathroom;
          case "microwave":
            return camper.microwave;
          default:
            console.warn(`Unhandled equipment type: ${selectedEq}`);
            return false;
        }
      });
    });
  }
  if (filters.type) {
    filtered = filtered.filter(
      (camper) => camper.form.toLowerCase() === filters.type!.toLowerCase()
    );
  }
  return filtered;
};
