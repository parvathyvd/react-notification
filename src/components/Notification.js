import React, { useState } from "react";
import angela from "../images/avatar-angela-gray.webp";
import mark from "../images/avatar-mark-webber.webp";
import jacob from "../images/avatar-jacob-thompson.webp";
import risky from "../images/avatar-rizky-hasanuddin.webp";
import kim from "../images/avatar-kimberly-smith.webp";
import nathan from "../images/avatar-nathan-peterson.webp";
import anna from "../images/avatar-anna-kim.webp";
import chess from "../images/image-chess.webp";

const Notification = ({ read }) => {
  return (
    <section className="notifications">
      <article className={`details ${read ? "" : "unread"}`}>
        <figure>
          <img src={mark} alt="mark" />
        </figure>
        <div className={`desc ${read ? "" : "unread"}`}>
          <p>
            <b className="bolder">Mark Webber</b>reacted to your recent post
            <b className="bold"> My first tournament today!</b>
          </p>
          <span>1m ago</span>
        </div>
      </article>
      <article className={`details ${read ? "" : "unread"}`}>
        <figure>
          <img src={angela} alt="angela" />
        </figure>
        <div className={`desc ${read ? "" : "unread"}`}>
          <p>
            <b className="bolder">Angela Gray</b>followed you
          </p>
          <span>5m ago</span>
        </div>
      </article>
      <article className={`details ${read ? "" : "unread"}`}>
        <figure>
          <img src={jacob} alt="Jacob Thompson" />
        </figure>
        <div className={`desc ${read ? "" : "unread"}`}>
          <p>
            <b className="bolder">Jacob Thompson</b>has joined your group{" "}
            <span className="blue">Chess Club</span>
          </p>
          <span>1day ago</span>
        </div>
      </article>
      <article className="details">
        <figure>
          <img src={risky} alt="Rizky" />
        </figure>
        <div className="desc">
          <p>
            <b className="bolder">Rizky Hasanuddin</b>sent you a private message
          </p>
          <span>5day ago</span>
          <div className="reply">
            <p>
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
          </div>
        </div>
      </article>
      <article className="details">
        <figure>
          <img src={kim} alt="Jacob Thompson" />
        </figure>
        <div className="desc">
          <p>
            <b className="bolder">Kimberly Smith</b>commented on your picture
          </p>
          <span>1 week ago</span>
        </div>
        <figure>
          <img src={chess} alt="chess" />
        </figure>
      </article>
      <article className="details">
        <figure>
          <img src={nathan} alt="Nathan Peterson" />
        </figure>
        <div className="desc">
          <p>
            <b className="bolder">Nathan Peterson</b>reacted to your recent post
            5 end-game strategies to increase your win rate
          </p>
          <span>2weeks ago</span>
        </div>
      </article>
      <article className="details">
        <figure>
          <img src={anna} alt="Jacob Thompson" />
        </figure>
        <div className="desc">
          <p>
            <b className="bolder">Anna Kim </b>left the group{" "}
            <span className="blue">Chess Club</span>
          </p>
          <span>2weeks ago</span>
        </div>
      </article>
    </section>
  );
};

export default Notification;
