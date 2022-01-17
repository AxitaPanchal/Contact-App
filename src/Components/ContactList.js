import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    var deleteContactHandler = (id) => {
        props.getContactId(id)
    }
  
    const renderContactList = props.contacts.map((contact)=> {
        return (
<ContactCard contact={contact} clickHandler={deleteContactHandler}/>
        )
    })
    return (
        <div>
<h2 style={{height:"40px" , marginTop:"50px"}}> Contact List
   <Link to="/add"><button className="ui button blue" style={{float:'right', margin:5}} >Add</button></Link>
     </h2>
        <div className="ui celled list">
           {    renderContactList }
           </div>
        </div>
    )
}

export default ContactList
