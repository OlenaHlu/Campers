import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";
import { CampersState } from "./types";

const initialState: CampersState = {
  items: [],
  camper: {},
};
