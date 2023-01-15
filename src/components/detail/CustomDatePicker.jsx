import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "moment/locale/ko";
import ko from "date-fns/locale/ko";
import "./detail.css";
export default function CustomDatePicker({ state, setState }) {
  return (
    <>
      <DateRange
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        locale={ko}
      />
    </>
  );
}
