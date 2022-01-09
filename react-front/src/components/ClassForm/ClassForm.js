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

export default function ClassForm() {
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
  const [nameClass, setNameClass] = useState("");
  const handleChangeNameClass = (e) => setNameClass(e.target.value);
  const [members, setMembers] = useState("");
  const history = useHistory();
  const handleChangeMembers = (e) => setMembers(e.target.value);
  //   useEffect(() => {
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const params = useParams();
  //     console.log(params.nameClass);
  //   }, []);
  // eslint-disable-next-line no-undef
  const query = useLocation().search;
  const params = new URLSearchParams(query);
  const location = useLocation().pathname;
  const handleAdd = (event) => {
    event.preventDefault();
    const addUrl = "http://localhost:3000/class/add";
    axios
      .post(
        addUrl,
        { nameClass: nameClass, members: Number(members) },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokens")}`,
          },
        }
      )
      .then((response) => history.push("/class"));
  };
  const handleEdit = (event) => {
    event.preventDefault();
    const editUrl = "http://localhost:3000/class/" + params.get("classId");
    axios
      .put(
        editUrl,
        { nameClass: nameClass, members: Number(members) },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokens")}`,
          },
        }
      )
      .then((response) => history.push("/class"));
  };
  useEffect(() => {
    setNameClass(params.get("nameClass"));
    setMembers(params.get("members"));
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
            <Box>Name class</Box>
          </Typography>
          <TextField
            margin='normal'
            required
            fullWidth
            id='nameClass'
            label=''
            name='nameClass'
            onChange={handleChangeNameClass}
            autoComplete='nameClass'
            value={nameClass}
            defaultValue={params.get("nameClass")}
            autoFocus
            InputProps={{
              style: {
                color: "#000",
                background: "#fff",
              },
            }}
          />
          <Typography>
            <Box>Members</Box>
          </Typography>
          <TextField
            margin='normal'
            required
            fullWidth
            name='members'
            label=''
            type='members'
            id='members'
            value={members}
            onChange={handleChangeMembers}
            InputProps={{
              style: {
                color: "#000",
                background: "#fff",
              },
            }}
            autoComplete='members'
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
          {location?.startsWith("/edit") && (
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
