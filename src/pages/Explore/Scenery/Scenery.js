import React from "react";
import { cityData } from "../../../config/data";
import SelectItem from "../../../components/SelectItem/SelectItem";

function Scenery() {
  return <SelectItem data={cityData} title="PHONG CẢNH" type="scenery" />;
}

export default Scenery;
