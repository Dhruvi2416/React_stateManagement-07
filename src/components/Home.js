import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import image from "../image.png";
import {
  setConfirmPasswordOfInput,
  setEmailOfInput,
  setLoggedIn,
  setNameOfInput,
  setPasswordOfInput,
  setPhoneNoOfInput,
} from "../actions/Actions";

const Home = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  function logout() {
    //on logout everything in redux will be empty
    dispatch(setNameOfInput(""));
    dispatch(setEmailOfInput(""));
    dispatch(setPhoneNoOfInput(""));
    dispatch(setPasswordOfInput(""));
    dispatch(setConfirmPasswordOfInput(""));
    dispatch(setLoggedIn(false));
  }
  console.log(state.loggedIn);
  //first render will navigate to signup if not logged in
  useEffect(() => {
    if (!state.loggedIn) navigate("/signUp");
  }, []);

  return (
    <div>
      <div className="logOutBtn">
        <Link to={"/signup"}>
          <button onClick={() => logout()}>Logout</button>
        </Link>
      </div>

      <div className="container">
        <div className="row">
        <div className="profilePic col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          {/* {state.photo?<img src={URL.createObjectURL(state.photo)}/>:null} */}
          <img src={image} />
        </div>

        <div className="userDetails  col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <h3>Hello, {state.name}</h3>
          <h5>You are registered with the email id:</h5> <p>{state.email}</p>
          <h5>Phone Number: </h5> <p>{state.phoneNo}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
