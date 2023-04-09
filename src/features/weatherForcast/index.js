import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDates, setDate } from "../weatherForcast/datesSlice";

export const WeatherForcast = () => {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.forcastDates);
  const [dateSelected, setDateSelected] = useState("");
  const UF = useSelector((state) => state?.states?.dateSelected);

  const loading = useSelector((state) => state?.forcastDates?.loading);
  const status = useSelector((state) => state?.forcastDates?.status);

  useEffect(() => {
    dispatch(getDates(UF));
  }, [dispatch, UF]);

  const handleChange = (e) => {
    setDateSelected(e.target.value);
    dispatch(setDate(e.target.value));
  };

  return (
    <>
      {loading ? (
        <h2>{status}</h2>
      ) : (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Date</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={dateSelected}
            label="Forcast date"
            onChange={handleChange}
          >
            <MenuItem disabled>Select a date</MenuItem>
            {/* {alert(typeof dates.forcastDates)} */}
            {dates.forcastDates?.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
            {/* {forcastDates?.map((date) => (
              <MenuItem value={date}>{date}</MenuItem>
            ))} */}
          </Select>
        </FormControl>
      )}
    </>
  );
};
