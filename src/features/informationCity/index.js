import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInformationCity } from "../informationCity/informationCitySlice";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export const InformationCity = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state?.cities?.selectedCity);
  const selectedDate = useSelector(
    (state) => state?.forcastDates?.selectedDate
  );
  const cityInfo = useSelector(
    (state) => state?.informationCity?.dataInformation
  );

  const loading = useSelector((state) => state?.informationCity?.loading);
  const status = useSelector((state) => state?.informationCity?.status);

  useEffect(() => {
    dispatch(getInformationCity({ city: selectedCity, date: selectedDate }));
  }, [dispatch, selectedCity, selectedDate]);

  return (
    <>
      {loading ? (
        <h2>{status}</h2>
      ) : (
        selectedDate && (
          <Card sx={{ minWidth: 275 }}>
            &nbsp;
            <CardContent style={{ backgroundColor: "darkseagreen" }}>
              <Typography variant="h5" component="div">
                Show information of selected city name: {cityInfo.name}
              </Typography>
              <Typography variant="body2">
                City Label: {cityInfo.label}
              </Typography>
              <Typography variant="body2">
                City Description: {cityInfo.description}
              </Typography>
              <Typography variant="h6" component="div">
                City Wether Information
              </Typography>
              <Typography variant="body2" component="div">
                {cityInfo.weather && (
                  <Typography variant="body2">
                    Date :{cityInfo.weather.date}
                    <br />
                    Average day tempreture between 6 AM to 6 PM(In C):
                    {cityInfo.weather.daily}
                    <br />
                    Average night tempreture between 6 PM to 6 PM(In C):
                    {cityInfo.weather.nightly}
                    <br />
                    Average pressure(In hpa):{cityInfo.weather.pressure}
                  </Typography>
                )}
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
};
