import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getDates = createAsyncThunk("dates", async () => {
  try {
    const response = await instance.get(`dates`);
    return response.data;
  } catch (error) {
    throw rejectWithValue(error.message);
  }
});

export const setDate = createAsyncThunk(
  "setDate",
  async (arg, { rejectWithValue }) => {
    try {
      return arg;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  forcastDates: [],
  selectedDate: "",
  status: "idle",
  message: "",
  loading: false,
  isSuccess: false,
  hasError: false,
};

const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDates.pending, (state) => {
      state.loading = true;
      state.status = "loading...";
    });
    builder.addCase(getDates.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.status = "Sucess";
      state.forcastDates = action.payload;
    });
    builder.addCase(getDates.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.status = "Erro";
      state.message = action.payload; // action.error.message
    });

    builder.addCase(setDate.fulfilled, (state, action) => {
      state.selectedDate = action.payload.toString();
    });
  },
});

export default datesSlice.reducer;
