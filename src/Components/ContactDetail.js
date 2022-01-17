import React from 'react'
import { Link } from 'react-router-dom';
import user from '../Images/user.jpg';
const ContactDetail = (props) => {
    console.log("props",props);
    return (
        <div className="main" style={{marginTop:'50px'}}>
            <div className="ui card centered"> 
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">first name</div>
                    <div className="header">first@gmail.com</div>
                </div>
            </div>
            <Link to="/"><button className="ui button blue center">Back to Contact List </button></Link>
        </div>
    )
}

export default ContactDetail
