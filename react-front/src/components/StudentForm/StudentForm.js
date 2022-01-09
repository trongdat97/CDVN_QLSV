import react, { useEffect, useState } from "react";
import styles from "./class.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function StudentForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [info, setInfo] = useState({});
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
  const [mssv, setMssv] = useState("");
  const handleChangeMssv = (e) => setMssv(e.target.value);
  const [name, setName] = useState("");
  const history = useHistory();
  const handleChangeName = (e) => setName(e.target.value);

  // eslint-disable-next-line no-undef
  const query = useLocation().search;
  const params = new URLSearchParams(query);
  const location = useLocation().pathname;
  const handleAdd = (event) => {
    event.preventDefault();
    const addUrl = "http://localhost:3000/student/" + params.get("classId");
    axios
      .post(
        addUrl,
        { mssv: mssv, name: name },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokens")}`,
          },
        }
      )
      .then((response) =>
        history.push(`/student?classId=${params.get("classId")}`)
      );
  };
  const handleEdit = (event) => {
    event.preventDefault();
    const editUrl = "http://localhost:3000/student/" + params.get("studentId");
    axios
      .put(
        editUrl,
        { mssv: mssv, name: name },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokens")}`,
          },
        }
      )
      .then((response) =>
        history.push(`/student?classId=${params.get("classId")}`)
      );
  };
  useEffect(() => {
    setMssv(params.get("mssv"));
    setName(params.get("name"));
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.containerHeader}>
        <div className={styles.titles}>
          <img
            src='https://opensea.io/static/images/logos/opensea.svg'
            alt='img'
          />
          QLSV
        </div>
        <div></div>
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
        <Box
          component='form'
          noValidate
          sx={{ mt: 1 }}
          style={{ width: "40vw" }}
        >
          <Typography>
            <Box>Mssv</Box>
          </Typography>
          <TextField
            margin='normal'
            required
            fullWidth
            id='mssv'
            label=''
            name='mssv'
            onChange={handleChangeMssv}
            autoComplete='nameClass'
            value={mssv}
            autoFocus
            InputProps={{
              style: {
                color: "#000",
                background: "#fff",
              },
            }}
          />
          <Typography>
            <Box>Name</Box>
          </Typography>
          <TextField
            margin='normal'
            required
            fullWidth
            name='name'
            label=''
            type='name'
            id='name'
            value={name}
            onChange={handleChangeName}
            InputProps={{
              style: {
                color: "#000",
                background: "#fff",
              },
            }}
            autoComplete='name'
          />
          {location?.startsWith("/add") && (
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAdd}
            >
              Add
            </Button>
          )}
          {location?.startsWith("/update") && (
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleEdit}
            >
              Edit
            </Button>
          )}
        </Box>
      </div>
    </div>
  );
}
