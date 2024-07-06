import React, { useState } from "react";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};
const Main = () => {
  const { NAME, ROOM } = FIELDS;
  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  const handlerChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handlerClick = (e) => {
    const isDisabled = Object.values(values).some((values) => !values);
    if (isDisabled) e.preventDefault();
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>
        <form action="" className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={values[NAME]}
              autoComplete="off"
              onChange={handlerChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              placeholder="Room"
              value={values[ROOM]}
              autoComplete="off"
              onChange={handlerChange}
              className={styles.input}
              required
            />
          </div>
          <Link
            className={styles.group}
            onClick={handlerClick}
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
          >
            <button type="submit" className={styles.button}>
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
