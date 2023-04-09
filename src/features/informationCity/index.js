import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInformationCity } from "../informationCity/informationCitySlice";

export const InformationCity = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state?.cities?.selectedCity);
  const selectedDate = useSelector(
    (state) => state?.forcastDates?.selectedDate
  );
  const information = useSelector(
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
            Show information of selected city name: {information.name}
            <br />
            City Label: {information.label}
            <br />
            City Description: {information.description}
            <br />
            City Wether:
            <br />
            {information.weather && (
              <div>
                Date :{information.weather.date}
                <br />
                Average day tempreture(In C):{information.weather.daily}
                <br />
                Average night tempreture(In C):{information.weather.nightly}
                <br />
                Average pressure(In C):{information.weather.pressure}
              </div>
            )}
          </div>
        )
      )}
    </>
  );
};
