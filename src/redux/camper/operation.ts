import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError as _AxiosError } from "axios";
import { Campers, Camper } from "../types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk<
  Campers,
  void,
  { rejectValue: string }
>("/campers/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<Campers>("/campers");
    console.log(`Response data from MockAPI (all campers):`, response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching campers:", error.message);
      return thunkAPI.rejectWithValue(
        `Failed to fetch campers: ${error.message || "Unknown API error"}`
      );
    }
    return thunkAPI.rejectWithValue("An unknown error occurred during fetch");
  }
});

export const fetchCamperById = createAsyncThunk<
  Camper,
  string,
  { rejectValue: string }
>("/campers/camperByID", async (id, thunkAPI) => {
  try {
    const response = await axios.get<Camper>(`/campers/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch camper details."
      );
    }
    return thunkAPI.rejectWithValue("An unknown error occurred.");
  }
});
