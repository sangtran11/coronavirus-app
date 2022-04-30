import React, { useEffect, useState } from "react";

const RegionList = ({
  onHandleRegionSelected,
  regionList,
  countrySelected,
}) => {
  const [regionSelected, setRegionSelected] = useState("");
  useEffect(() => {
    // index 0: region name [string]
    // index 1: information [object]
    if (!regionSelected) {
      // reset info data when a region is unselected
      onHandleRegionSelected(null);
      return;
    }
    let detailInfo = null;
    if (regionSelected === "All") {
      const cloneRegionList = { ...regionList };
      delete cloneRegionList["All"];
      detailInfo = Object.values(cloneRegionList);
      Object.keys(cloneRegionList).forEach((item, index) => {
        detailInfo[index].region = item;
      });
    } else {
      const foundRegion = Object.entries(regionList).find(
        (item) => item[0] === regionSelected
      );
      detailInfo = foundRegion && foundRegion[1];
      detailInfo.region = regionSelected;
    }
    onHandleRegionSelected(detailInfo);
  }, [regionSelected]);

  useEffect(() => {
    setRegionSelected("");
  }, [countrySelected]);

  return (
    <>
      <label htmlFor="region-select-id">List of Regions</label>
      <select
        id="region-select-id"
        className="form-select"
        onChange={(e) => setRegionSelected(e.target.value)}
        value={regionSelected}
      >
        <option value="">Select Region</option>
        {regionList &&
          Object.keys(regionList).map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default RegionList;
