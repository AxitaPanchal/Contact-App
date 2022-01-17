import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="container item ui-grid">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { abc: "hello" } }}>
          {" "}
          <div className="header">{name}</div>
          <div className="header">{email}</div>
        </Link>
      </div>
      <div className="ui grid right floated">
      <i
        className=" column trash alternate outline icon"
        style={{ color: "red",  float: "right" }}
        onClick={() => props.clickHandler(id)}
      />
</div>
    </div>
  );
};

export default ContactCard;
