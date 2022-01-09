import * as React from "react";
import styles from "./about.module.css";
import { Link } from "react-router-dom";

export default function aboutSide() {
  return (
    <div className={styles.main}>
      <div className={styles.containerHeader}>
        <div className={styles.titles}>
          <img
            src='	https://opensea.io/static/images/logos/opensea.svg'
            alt='img'
          />
          QLSV
        </div>
        <div className={styles.info}>
          <Link to='/signin' className={styles.his}>
            Sign in
          </Link>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.containerBody}>
        <h1 className={styles.mainTitles}>
          Nguyen Van Dat <span>17PFIEV3</span>{" "}
        </h1>
        <div className={styles.subTitles}>
          <span>
            Chuyên Đề Công Nghệ Phần Mềm
            
          </span>
        </div>
        <div className={styles.buttonGroup}>
          {/* <button>Get Start</button>
          <button>View on Github</button> */}
        </div>
        <img
          className={styles.bodyImg}
          src='https://cafefcdn.com/2019/8/22/edf-tempo-couleur-de-demain-la-edf-tempo-historique-couleur-jour-et-demain-15664469984471689659056.jpg'
          alt='https://cafefcdn.com/2019/8/22/edf-tempo-couleur-de-demain-la-edf-tempo-historique-couleur-jour-et-demain-15664469984471689659056.jpg'
        />
      </div>
    </div>
  );
}
