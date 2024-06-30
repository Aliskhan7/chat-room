import React from "react";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>
        <form action="" className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value=""
              autoComplete={false}
              onChange={() => {}}
              className={styles.input}
              required
            />
            <input
              type="text"
              name="room"
              placeholder="Room"
              value=""
              autoComplete={false}
              onChange={() => {}}
              className={styles.input}
              required
            />
          </div>
          <Link to="/chat">
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
