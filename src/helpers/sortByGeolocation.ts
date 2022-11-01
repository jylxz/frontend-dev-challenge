import { BeaconSchools } from "../services/APIs";
import { getDistance } from "geolib";

export function sortSchoolsByGeolocation(
  beaconSchools: BeaconSchools,
  geolocation: GeolocationCoordinates
) {
  const { latitude, longitude } = geolocation;

  return beaconSchools.schools.sort((a, b) => {
    const aDist = getDistance(
      {
        latitude,
        longitude,
      },
      {
        longitude: a.coordinates.long,
        latitude: a.coordinates.lat,
      }
    );

    const bDist = getDistance(
      {
        latitude,
        longitude,
      },
      {
        longitude: b.coordinates.long,
        latitude: b.coordinates.lat,
      }
    );

    return aDist - bDist;
  });
}
