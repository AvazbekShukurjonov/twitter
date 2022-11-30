import classNames from "classnames";
import React, { useEffect } from "react";
// import Tweet from "../Tweet/Tweet";

import user1 from '../images/user1.svg'

import { Link } from "react-router-dom";

import styles from "./ProfilePage.module.css";

const Map = [
  {
    name: "Tweets",
  },
  {
    name: "Media",
  },
  {
    name: "Likes",
  },
  {
    name: "Replies",
  },
];

export const Profile = ({ about, data }) => {
  const [filter, setFilter] = React.useState("Tweets");

  const name = localStorage.getItem("user");
  let Name = "";
  if (name) {
    const nameFirst = name[0].toUpperCase();
    const lastName = name.slice(1);
    const fullName = `${nameFirst}${lastName}`;
    Name = fullName;
  }

  if (name) {
    const nameFirst = name[0].toUpperCase();
    const lastName = name.slice(1);
    const fullName = `${nameFirst}${lastName}`;
    Name = fullName;
  }

  const selector = (item) => {
    if (filter === item.name) {
      return true;
    }
  };
  return (
    <div className={styles.profile}>
      <div className={styles.content__title}>
        <h1>{Name}</h1>
        <p>
          {about && about.message
            ? about.message.length
            : data
            ? data.length
            : null}{" "}
          Tweets
        </p>
      </div>
      <div className={styles.content__header}></div>
      <div className={styles.content__user}>
        <div className={styles.user__top}>
          <img
            src={user1}
            alt=""
          />
          <button className={styles.edit_btn} type="button">
            Edit profile
          </button>
        </div>
        <div className={styles.user__btm}>
          <h2>{Name}</h2>
          <p>@{localStorage.getItem("user")?.toLocaleLowerCase()}</p>
        </div>
        <div className={styles.tweets}>
          <ul>
            {Map.map((item) => {
              return (
                <li
                  key={item.name}
                  onClick={() => {
                    setFilter(item.name);
                  }}
                  id={styles.tweets__list}
                >
                  <p className={styles.tweets__tweet}>{item.name}</p>
                  <p
                    className={classNames(selector(item) ? styles.line : "")}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
