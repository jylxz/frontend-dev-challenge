import React, { useEffect, useState } from "react";
import isGeolocation from "../helpers/isGeolocation";
import { sortSchoolsByGeolocation } from "../helpers/sortByGeolocation";
import { BeaconSchool, BeaconSchools } from "../services/APIs";

export default function useBeaconSchools(BeaconSchools: BeaconSchools) {
  const [results, setResults] = useState<BeaconSchool[] | null>(null);
  const [geolocation, setGeolocation] =
    useState<GeolocationCoordinates | null>();

  useEffect(() => {
    sort();
  }, [BeaconSchools, geolocation, setGeolocation]);
  
  function sort() {
    switch (true) {
      case isGeolocation(geolocation):
        const closestSchools = sortSchoolsByGeolocation(
          BeaconSchools,
          geolocation as GeolocationCoordinates
        );
        setResults(closestSchools);
        break;
      case typeof geolocation === "object":
        const sortedSchools = BeaconSchools.schools.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setResults(sortedSchools);
        break;
      default:
        setResults(null);
    }
  }

  function search(schoolName: string) {
    if (schoolName === "") {
      sort();
    } else {
      const filteredSchools = BeaconSchools.schools.filter((school) =>
        school.name.toLowerCase().includes(schoolName.toLowerCase())
      );

      return setResults(filteredSchools);
    }
  }

  return { results, setGeolocation, search };
}
