import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import styles from "../styles/Chat.module.css";
import icon from "../images/emoji.svg";
import EmojiPicker from "emoji-picker-react";
import Messages from "./Messages";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const { search } = useLocation();
  const [params, setParams] = useState({ user: "", room: "" });
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);

    socket.emit("join", searchParams);
  }, [search]);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      setState((_state) => [..._state, data]);
    });
  }, []);

  const leftRoom = () => {};
  const handlerChange = ({ target: { value } }) => setMessage(value);
  const onEmojiClick = ({ emoji }) => setMessage(`${message} ${emoji}`);
  const handlerSubmit = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", { message, params });

    setMessage("");
  };

  console.log(state);
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.title}>{params.room}</div>
        <div className={styles.users}> 0 users</div>
        <button className={styles.left} onClick={leftRoom}>
          Left the room
        </button>
      </div>
      <div className={styles.messages}>
        <Messages messages={state} name={params.name} />
      </div>
      <form className={styles.form}>
        <div className={styles.input}>
          <input
            type="text"
            name="message"
            placeholder="What do you want to write?"
            value={message}
            autoComplete="off"
            onChange={handlerChange}
            required
          />
        </div>
        <div className={styles.emoji}>
          <img src={icon} alt="" onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <div className={styles.emojies}>
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
        <div>
          <input
            className={styles.button}
            type="submit"
            onSubmit={handlerSubmit}
            value="Send a message"
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;
