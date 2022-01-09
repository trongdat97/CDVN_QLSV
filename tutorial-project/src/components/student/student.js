import * as React from "react";
import styles from "./student.module.css";
import { Link } from "react-router-dom";
export default function studentSide() {
  return (
    <div className={styles.main}>
      <div className={styles.containerHeader}>
        <div className={styles.titles}>
          <img
            src="	https://opensea.io/static/images/logos/opensea.svg"
            alt="img"
          />
          OpenSea
        </div>
        <div className={styles.info}>
          <div className={styles.his}>Sign in</div>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.containerBody}>
        <h1 className={styles.mainTitles}>Danh Sách Sinh Vien Cua Lop </h1>
        <div className={styles.divbt}>
          <button className={styles.buttonadd}>ADD</button>
        </div>
        <div className={styles.box}>
          <div className={styles.classTitle}>
            <div className={styles.name}>MSSV</div>
            <div className={styles.numberStudent}>Ten Sinh Vien</div>
            <div className={styles.action}>Action</div>
          </div>
          <div className={styles.classList}>
            <div className={styles.class}>
              <div className={styles.nameClass}>Giải tích</div>
              <div className={styles.numberClass}>35 người</div>
              <div className={styles.buttonGroup}>
                <button>
                  <i class="fas fa-trash"></i>
                </button>
                <button>
                  <i class="fas fa-pen"></i>
                </button>
              </div>
            </div>
            <div className={styles.class}>
              <div className={styles.nameClass}>giải tích</div>
              <div className={styles.numberClass}>35 người</div>
              <div className={styles.buttonGroup}>
                <button>
                  <i class="fas fa-trash"></i>
                </button>
                <button>
                  <i class="fas fa-pen"></i>
                </button>
              </div>
            </div>
            <div className={styles.class}>
              <div className={styles.nameClass}>Giải tích</div>
              <div className={styles.numberClass}>35 người</div>
              <div className={styles.buttonGroup}>
                <button>
                  <i class="fas fa-trash"></i>
                </button>
                <button>
                  <i class="fas fa-pen"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
