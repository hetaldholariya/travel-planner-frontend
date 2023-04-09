import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getCities = createAsyncThunk("cities", async () => {
  try {
    const response = await instance.get(`cities`);
    return response.data;
  } catch (error) {
    throw rejectWithValue(error.message);
  }
});

export const setCity = createAsyncThunk(
  "city/setCity",
  async (arg, { rejectWithValue }) => {
    try {
      return arg;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  citiesData: [],
  selectedCity: "",
  status: "idle",
  message: "",
  loading: false,
  isSuccess: false,
  hasError: false,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.loading = true;
      state.status = "loading...";
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.status = "Sucess";
      state.citiesData = action.payload;
    });
    builder.addCase(getCities.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.status = "Erro";
      state.message = action.payload; // action.error.message
    });

    builder.addCase(setCity.fulfilled, (state, action) => {
      state.selectedCity = action.payload.toString();
    });
  },
});

export default citiesSlice.reducer;
