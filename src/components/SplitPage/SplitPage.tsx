import type { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HouseIcon } from "../../images/house.svg";
import { ReactComponent as CarIcon } from "../../images/truck.svg";
import "../animation.css";
import styles from "./SplitPage.module.css";

interface SplitPageProps {
  header: string;
  style?: string;
  buttonText: string;
  slogan: string;
  subtext: string;
  onMouseOverHandle: () => void;
  className?: string;
  emoji: string;
}

const SplitPage: FC<SplitPageProps> = (props) => {
  return (
    <div
      className={`${styles.split ?? ""} ${props.style ?? ""} ${props.className ?? ""}`}
      onMouseOver={(): void => {
        props.onMouseOverHandle();
      }}
    >
      <div className={styles.backgroundContainer}>
        <div className={styles.contentContainer}>
          <p className={styles.header}>{props.slogan}</p>
          <p className={styles.subtext}>{props.subtext}</p>
          <Link className={styles.button} to={`/${props.header}`}>
            {props.emoji === "house" ? (
              <HouseIcon className={styles.icon} />
            ) : (
              <CarIcon className={styles.icon} />
            )}
            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplitPage;
