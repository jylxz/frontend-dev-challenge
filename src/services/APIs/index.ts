export type BeaconSchools = { schools: BeaconSchool[] };

export interface BeaconSchool {
  id: string;
  name: string;
  type: string;
  zipCode: string;
  enrolled: number;
  applicants: number;
  admitted: number;
  tuition: number;
  highestDegree: string;
  county: string;
  state: string;
  coordinates: {
    lat: number;
    long: number;
  };
}

export async function fetchBeaconSchools() {
  const url = "http://api.sendbeacon.com/team/schools";

  const schools = await fetch(url)
    .then((res) => res.json())
    .then((data) => data as BeaconSchools);

  return schools;
}
