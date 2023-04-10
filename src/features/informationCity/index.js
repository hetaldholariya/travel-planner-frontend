import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInformationCity } from "../informationCity/informationCitySlice";

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
          <div>
            Show information of selected city name: {cityInfo.name}
            <br />
            City Label: {cityInfo.label}
            <br />
            City Description: {cityInfo.description}
            <br />
            <br />
            City Wether Information
            <br />
            {cityInfo.weather && (
              <div>
                Date :{cityInfo.weather.date}
                <br />
                Average day tempreture between 6 AM to 6 PM(In C):
                {cityInfo.weather.daily}
                <br />
                Average night tempreture between 6 PM to 6 AM(In C):
                {cityInfo.weather.nightly}
                <br />
                Average pressure(In hPa):{cityInfo.weather.pressure}
              </div>
            )}
          </div>
        )
      )}
    </>
  );
};
