import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError as _AxiosError } from "axios";
import { Campers } from "./types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk<
  Campers,
  { page: number; limit: number },
  { rejectValue: string }
>("/campers/fetchAll", async ({ page, limit = 5 }, thunkAPI) => {
  try {
    const response = await axios.get<Campers>("/campers", {
      params: {
        page: page,
        limit: limit,
      },
    });
    console.log(`Response data from MockAPI for page ${page}:`, response.data);
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
