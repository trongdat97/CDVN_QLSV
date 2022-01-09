import react, { useEffect, useState } from "react";
import styles from "./class.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
export default function classSide() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [info, setInfo] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [classList, setClassList] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getProfile = "http://localhost:3000/user/getprofile";
    axios
      .get(getProfile, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokens")}`,
        },
      })
      .then((response) => setInfo(response.data.data));
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getAllClass = "http://localhost:3000/class/getall";
    axios
      .get(getAllClass, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokens")}`,
        },
      })
      .then((response) => setClassList(response.data.data));
  }, []);
  const handleAdd = () => {
    // eslint-disable-next-line no-restricted-globals
    history.push("/addclass");
  };
  const handleDelete = (id) => {
    const deleteClass = "http://localhost:3000/class/" + id;
    axios
      .delete(deleteClass, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokens")}`,
        },
      })
      .then((response) => {
        const getAllClass = "http://localhost:3000/class/getall";
        axios
          .get(getAllClass, {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("tokens")}`,
            },
          })
          .then((response) => setClassList(response.data.data));
      });
  };
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
          <p className={styles.nameInfo}>{info?.name}</p>
          <img
            src='https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png'
            alt='img'
            className={styles.avatar}
          />
        </div>
      </div>
      <div className={styles.containerBody}>
        <h1 className={styles.mainTitles}>Danh Sách Các Lớp </h1>
        <div className={styles.divbt}>
          <button className={styles.buttonadd} onClick={handleAdd}>
            ADD
          </button>
        </div>
        <div className={styles.box}>
          <div className={styles.classTitle}>
            <div className={styles.name}>Tên Lớp</div>
            <div className={styles.numberStudent}>Số lượng học sinh</div>
            <div className={styles.action}>Action</div>
          </div>
          <div className={styles.classList}>
            {classList?.map((item) => (
              <div className={styles.class}>
                <div
                  className={styles.nameClass}
                  onClick={() =>
                    history.push(
                      `/student?classId=${item?.id}&nameClass=${item?.nameClass}`
                    )
                  }
                >
                  {item?.nameClass}
                </div>
                <div
                  className={styles.numberClass}
                >{`${item?.members} học sinh`}</div>
                <div className={styles.buttonGroup}>
                  <button onClick={() => handleDelete(item?.id)}>
                    <i class='fas fa-trash'></i>
                  </button>
                  <button
                    onClick={() =>
                      history.push(
                        `/edit?classId=${item?.id}&nameClass=${item?.nameClass}&members=${item?.members}`
                      )
                    }
                  >
                    <i class='fas fa-pen'></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
