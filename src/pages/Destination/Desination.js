import React from "react";
import { countryData } from "../../config/data";
import SelectItem from "../../components/SelectItem/SelectItem";

function Destination() {
  return <SelectItem data={countryData} title="ĐIỂM ĐẾN" type="destination" />;
}

export default Destination;
