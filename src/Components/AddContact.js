import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContact = (props) => {
  console.log("props",props);
  const emailRegex = /\S+@\S+\.\S+/ ;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mendatory !");
      return;
    }
    if(emailRegex.test(email)) {
      props.addContactHandler({ name, email });
      setEmail("");
      setName("");
      navigate("/");
      console.log("addd", name, email);
    } 
    else{
      setShowError(true)
    }
  
  };
  return (
    <div className="ui main">
      <h2 style={{ height: "40px", marginTop: "50px" }}> Add Contact </h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showError && <span style={{color:"red"}}>Please enter valid email</span>}
        </div>
        <button className="ui button blue">Add</button>
        <Link to="/">
          {" "}
          <button className="ui button blue">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
