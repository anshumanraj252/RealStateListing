import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./newsletter.module.css";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  const initialState = {
    email: "",
  };
  const [state, setState] = useState(initialState);

  function handleState(event) {
    setState((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  }
  const navigate = useNavigate();

  const clickhandler = async (e) => {
    setState(initialState);
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/email/register", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: state.email }),
    });
    const json = await response.json();
    // console.log(json);
    // if (json.success) {
    //   //save the auth toke to local storage and redirect
    //   // localStorage.setItem('token', json.authToken)
    //   alert("subscribed");
    // } else {
    // }
    alert("Subscribed");
  };
  // const clickhandler = (e) => {
  //   console.log(state);
  //   setState("");
  // };

  // console.log(state);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" value={state.email} onChange={handleState} />
          <FiSend className={classes.sendIcon} onClick={clickhandler} />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
