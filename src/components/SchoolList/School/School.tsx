import React from "react";
import { BeaconSchool } from "../../../services/APIs";
import styles from "./school.module.css";

export default function School({ school }: { school: BeaconSchool }) {
  return (
    <div className={styles.beaconSchool}>
      <div className={styles.beaconSchoolLogo}>{school.name.slice(0, 1)}</div>
      <div className={styles.beaconSchoolMain}>
        <div className={styles.beaconSchoolName}>{school.name}</div>
        <div className={styles.beaconSchoolCounty}>
          {school.county.split("County")[0]}
        </div>
      </div>
    </div>
  );
}
