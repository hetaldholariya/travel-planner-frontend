import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCities, setCity } from "../cities/citiesSlice";
import { InformationCity } from "../informationCity";

export const SelectCity = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.citiesData);
  const [citySelected, setCitySelected] = useState("");
  const UF = useSelector((state) => state?.states?.selectedState);

  const loading = useSelector((state) => state?.cities?.loading);
  const status = useSelector((state) => state?.cities?.status);

  useEffect(() => {
    dispatch(getCities(UF));
  }, [dispatch, UF]);

  const handleChange = (e) => {
    setCitySelected(e.target.value);
    dispatch(setCity(e.target.value));
  };

  return (
    <>
      {loading ? (
        <h2>{status}</h2>
      ) : (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">City</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={citySelected}
            label="estados"
            onChange={handleChange}
          >
            <MenuItem disabled>Select a city</MenuItem>
            {cities?.map((item) => (
              <MenuItem value={item.name}>{item.label}</MenuItem>
            ))}
          </Select>
          {citySelected && <InformationCity />}
        </FormControl>
      )}
    </>
  );
};
