import { useState } from "react";

const Main = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [Password, setPassword] = useState("");

  const handelChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handelChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handelChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handelChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="form1">
          <input
            type="text"
            name="FirstName"
            id="FirstName"
            value={FirstName}
            placeholder="Enter Your FirstName"
            onChange={handelChangeFirstName}
          ></input>
        </div>
        <div className="form1">
          <input
            type="text"
            name="LasttName"
            id="LastName"
            value={LastName}
            placeholder="Enter Your LastName"
            onChange={handelChangeLastName}
          ></input>
        </div>
        <div className="form1">
          <input
            type="text"
            name="Age"
            id="Age"
            value={Age}
            placeholder="Enter Your Age"
            onChange={handelChangeAge}
          ></input>
        </div>
        <div className="form1">
          <input
            type="password"
            name="Password"
            id="password"
            value={Password}
            placeholder="Enter Your Password"
            onChange={handelChangePassword}
          ></input>
        </div>
        <button className="button-container">Submit</button>
      </form>
    </div>
  );
};

export default Main;
