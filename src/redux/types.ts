export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: "alcove" | "fullyIntegrated" | "panelTruck";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: "automatic" | "manual";
  engine: "petrol" | "diesel" | "hybrid";
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Gallery[];
  reviews: Review[];
};

export type Gallery = {
  thumb: string;
  original: string;
};

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Campers = {
  total: number;
  items: Camper[];
};

export type CampersState = {
  items: Camper[];
  selectedCamper: Camper | null;
  displayedCampers: Camper[];
  total: number;
  isloading: boolean;
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
  appliedFilters: FilterState;
};

//filters
export type VehicleEquipment =
  | "AC"
  | "automatic"
  | "kitchen"
  | "TV"
  | "bathroom"
  | "microwave";

export type VehicleType = "panelTruck" | "fullyIntegrated" | "alcove";

export type FilterState = {
  location: string;
  equipment: VehicleEquipment[];
  type: VehicleType | null;
};
