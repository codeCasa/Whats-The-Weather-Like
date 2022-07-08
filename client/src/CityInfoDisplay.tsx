import React from "react";
import { useSearchReduxProps } from "./hooks/SeachHooks";

export const CityInfoDisplay = () => {
  const searchProps = useSearchReduxProps();

  return searchProps.isSearching ||
    searchProps.cityInfo === undefined ? null : searchProps.cityInfo ===
    null ? (
    <p className="text-danger">
      Something went wrong fetching the weather please try again.
    </p>
  ) : (
    <>
      <h4 className="text-success">
        The weather in {searchProps.cityInfo.name},{" "}
        {searchProps.cityInfo.country}:
      </h4>
    </>
  );
};
