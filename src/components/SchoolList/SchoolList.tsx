import React, { useState } from "react";
import { BeaconSchool } from "../../services/APIs";
import School from "./School";
import styles from "./SchoolList.module.css";

export default function SchoolList({
  beaconSchools,
}: {
  beaconSchools: BeaconSchool[] | null;
}) {
  const [className, setClassName] = useState(styles.beaconSchoolList);

  function handleScrollListener(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    if (e.currentTarget.scrollTop > 0) {
      setClassName(`${styles.beaconSchoolList} ${styles.beaconSchoolListMask}`);
    } else {
      setClassName(styles.beaconSchoolList);
    }
  }

  return (
    <div
      className={`${className} ${
        !beaconSchools ? styles.beaconSchoolListLoading : ""
      }`}
      onScroll={(e) => handleScrollListener(e)}
    >
      {beaconSchools ? (
        beaconSchools.map((school) => (
          <School key={school.id} school={school} />
        ))
      ) : (
        <div className="spinner-border" role="status"></div>
      )}
    </div>
  );
}
