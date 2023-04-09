import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../features/cities/citiesSlice";
import informationReducer from "../features/informationCity/informationCitySlice";
import datesReducer from "../features/weatherForcast/datesSlice";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    informationCity: informationReducer,
    forcastDates: datesReducer,
  },
});

export default store;
