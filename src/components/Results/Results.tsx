import type { FC } from "react";
import styles from "../Forms/Form.module.css";

const Results: FC = ({ children }) => {
  return (
    <div className={styles.resultsContainer}>
      <p className={styles.mainHeader}>RESULTS</p>
      <div>{children}</div>
    </div>
  );
};

export default Results;
