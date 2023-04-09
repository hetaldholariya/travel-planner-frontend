import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getInformationCity = createAsyncThunk(
  "information/getInformationCity",
  async (obj) => {
    var params = new URLSearchParams();
    params.append("name", obj.city);
    params.append("date", obj.date);
    var request = {
      params: params,
    };
    try {
      const response = await instance.get(`city?`, request);
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  dataInformation: [],
  status: "idle",
  message: "",
  loading: false,
  isSuccess: false,
  hasError: false,
};

const informationCitySlice = createSlice({
  name: "informationCity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInformationCity.pending, (state) => {
      state.loading = true;
      state.status = "Loading...";
    });
    builder.addCase(getInformationCity.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.status = "Success";
      state.dataInformation = action.payload;
    });
    builder.addCase(getInformationCity.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.status = "Error";
      state.message = action.payload;
    });
  },
});

export default informationCitySlice.reducer;
