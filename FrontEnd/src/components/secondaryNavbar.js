import React, { useState, useEffect } from "react";
import Clock from "../media/clock.svg";
import Coins from "../media/coins.svg";
import Logo from "../media/logo.svg";
import Flame from "../media/flame.svg";
import { Link } from "react-router-dom";
import "../stylesheets/secondaryNavbar.css";

const CountDown = (props) => {
  const [[m, s], setTime] = useState([props.minutes, props.seconds]);
  props.setMin(m);
  props.setSec(s);
  const tick = () => {
    if(count==0)
    {
      setTimeout(() => {
        if (props.over) return;
        if (m === 0 && s === 0) {
          props.setOver(true);
        } else if (s == 0) {
          setTime([m - 1, 59]);
        } else {
          setTime([m, s - 1]);
        }
        count+=1;
      },2000);
    }
    else {
      if (props.over) return;
        if (m === 0 && s === 0) {
          props.setOver(true);
        } else if (s == 0) {
          setTime([m - 1, 59]);
        } else {
          setTime([m, s - 1]);
        }
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <React.Fragment>
      {props.over
        ? "Time's up!"
        : `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`}
    </React.Fragment>
  );
};

const SecondaryNavbar = (props) => {
  return (
    <div className="SNNavbox">
      <div className="SNBox1">
        <div className="SNLogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="SNQuestionnobox">
          <span className="SNPresentQuestion">
            {props.questionNumber + "/"}
          </span>
          <span className="SNTotalQuestions">10</span>
        </div>
      </div>

      <div className="SNBox2">
        {/* <div className="SNStreak">
          <p className="detailtext">Streak</p>
          <div className="SNStreakScore">
            <img src={Flame} alt="coins" />
            <span className="detailtext">2</span>
          </div>
        </div> */}

        <div className="SNTimer">
          <img src={Clock} alt="Timer" />
          <span className="detailtext">
            <CountDown
              minutes={20}
              seconds={0}
              setMin={props.setMin}
              setSec={props.setSec}
              over={props.over}
              setOver={props.setOver}
            />
          </span>
        </div>

        <button
          className="SNExitButton"
          onClick={() => {
            props.setIsExit(true);
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
