import * as React from "react";
import styles from "./student.module.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function studentSide() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const query = useLocation().search;
  const params = new URLSearchParams(query);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [info, setInfo] = React.useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [studentList, setStudentList] = React.useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
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
  React.useEffect(() => {
    const getAllStudent =
      "http://localhost:3000/student/" + params.get("classId");
    axios
      .get(getAllStudent, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokens")}`,
        },
      })
      .then((response) => setStudentList(response.data.data));
  }, []);
  const handleDelete = (id) => {
    const deleteClass = "http://localhost:3000/student/" + id;
    axios
      .delete(deleteClass, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokens")}`,
        },
      })
      .then((response) => {
        const getAllStudent =
          "http://localhost:3000/student/" + params.get("classId");
        axios
          .get(getAllStudent, {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("tokens")}`,
            },
          })
          .then((response) => setStudentList(response.data.data));
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
        <h1 className={styles.mainTitles}>Danh Sách Sinh Vien Cua Lop </h1>
        <Typography>
          <Box>{params.get("nameClass")}</Box>{" "}
        </Typography>
        <div className={styles.divbt}>
          <button
            className={styles.buttonadd}
            onClick={() =>
              history.push(`/addstudent?classId=${params.get("classId")}`)
            }
          >
            ADD
          </button>
        </div>
        <div className={styles.box}>
          <div className={styles.classTitle}>
            <div className={styles.name}>MSSV</div>
            <div className={styles.numberStudent}>Ten Sinh Vien</div>
            <div className={styles.action}>Action</div>
          </div>
          <div className={styles.classList}>
            {studentList?.map((item) => (
              <div className={styles.class}>
                <div className={styles.nameClass}>{item?.mssv}</div>
                <div className={styles.numberClass}>{`${item?.name}`}</div>
                <div className={styles.buttonGroup}>
                  <button onClick={() => handleDelete(item?.id)}>
                    <i class='fas fa-trash'></i>
                  </button>
                  <button>
                    <i
                      class='fas fa-pen'
                      onClick={() =>
                        history.push(
                          `/update?classId=${item?.classId}&studentId=${item?.id}&mssv=${item?.mssv}&name=${item?.name}`
                        )
                      }
                    ></i>
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
