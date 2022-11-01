import { useEffect } from "react";
import Header from "../components/Header/Header";
import useBeaconSchools from "../hooks/useBeaconSchools";
import { fetchBeaconSchools, BeaconSchools } from "../services/APIs";
import styles from "../styles/Home.module.css";
import SchoolList from "../components/SchoolList";
import SearchBar from "../components/SearchBar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({weight: ["100", "200", "300", "400", "600"]})

export const getServerSideProps = async () => {
  const schools = await fetchBeaconSchools();

  return {
    props: {
      schools,
    },
  };
};

export default function Home({ schools }: { schools: BeaconSchools }) {
  const { results, setGeolocation, search } = useBeaconSchools(schools);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocation(position.coords);
      },
      (error) => {
        setGeolocation(null);
      }
    );
  }, [setGeolocation]);

  return (
    <div className={`${styles.app} ${poppins.className}`}>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.mainHeading}>Pick Your School</h1>
        <SearchBar search={search} />
        <SchoolList beaconSchools={results} />
      </div>
    </div>
  );
}
