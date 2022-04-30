import React, { useState, useEffect } from "react";
import covidStatsJSON from "../../covid-stats.json";
import Region from "../../components/Region/Region";
import Information from "../../components/Information/Information";

const Country = () => {
  const [covidStats, setCovidStats] = useState(
    JSON.parse(JSON.stringify(covidStatsJSON))
  );
  const [countrySelected, setCountrySelected] = useState("");
  const [region, setRegion] = useState();
  const [detailInfo, setDetailInfo] = useState();

  useEffect(() => {
    // index 0: country name [string]
    // index 1: region list [object]
    if (countrySelected) {
      const foundCountry = Object.entries(covidStats).find(
        (item) => item[0] === countrySelected
      );
      const regionItem = foundCountry && foundCountry[1];
      // Only has one "All" region. Binding data to display on UI
      if (regionItem && Object.keys(regionItem).length === 1) {
        const detailInfo = regionItem["All"];
        setDetailInfo(detailInfo);
        setRegion(null);
      } else {
        // Set data for a region select form
        setRegion(regionItem);
        setDetailInfo(null);
      }
    } else {
      // reset info and region data when a country is unselected
      setDetailInfo(null);
      setRegion(null);
    }
  }, [countrySelected]);

  const handleRegionSelected = (data) => {
    setDetailInfo(data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Coronavirus Statistics</h1>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="country-select-id">List of Countries</label>
            <select
              id="country-select-id"
              className="form-select"
              onChange={(e) => setCountrySelected(e.target.value)}
              value={countrySelected}
            >
              <option value="">Select Country</option>
              {covidStats &&
                Object.keys(covidStats).map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          {region && Object.keys(region).length > 1 && (
            <Region
              onHandleRegionSelected={handleRegionSelected}
              regionList={region}
              countrySelected={countrySelected}
            />
          )}
        </div>
      </div>
      <div className="row">
        {detailInfo && (
          <Information country={countrySelected} statsDetail={detailInfo} />
        )}
      </div>
    </div>
  );
};

export default Country;
