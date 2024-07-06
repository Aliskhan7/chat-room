import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Chat.module.css";
import icon from "../images/emoji.svg";
import send from "../images/send.svg";
import exit from "../images/exit.svg";
import EmojiPicker from "emoji-picker-react";
import Messages from "./Messages";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useState({ user: "", room: "" });
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState(0);

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

  useEffect(() => {
    socket.on("room", ({ data: { users } }) => {
      setUsers(users.length);
    });
  }, []);

  const leftRoom = () => {
    socket.emit("leftRoom", { params });
    navigate("/");
  };
  const handlerChange = ({ target: { value } }) => setMessage(value);
  const onEmojiClick = ({ emoji }) => setMessage(`${message} ${emoji}`);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) return;

    socket.emit("sendMessage", { message, params });

    setMessage("");
  };

  console.log(state);
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.title}>{params.room}</div>
        <div className={styles.users}> {users} users this room</div>
        <button className={styles.left} onClick={leftRoom}>
          <img src={exit} alt="" />
        </button>
      </div>
      <div className={styles.messages}>
        <Messages messages={state} name={params.name} />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          <button className={styles.button}>
            <img src={send} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
