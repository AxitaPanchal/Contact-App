import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await fetch(
  //       'https://fakestoreapi.com/users',
  //     );
  //     const response = await res.json();
  //     setContacts(response);
  //     console.log("response",response);
  //   };
  //   getUsers();
  // }, [])
  const addContactHandler = (contact) => {
    console.log("contact", contact);
    setContacts([
      ...contacts,
      { id:Math.random().toFixed(2)*100, ...contact },
    ]);
  };

  const removeContactHandler = (id) => {
    console.log("iddd", id);
    const newContactList = contacts.filter((x) => {
      return x?.id !== id;
    });
    setContacts(newContactList);
  };
 
  useEffect(() => {
    const retrivalContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log("locastorage.getItem", retrivalContacts);
    if (retrivalContacts) setContacts(retrivalContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("locastorage.setItem");
  }, [contacts]);


  console.log("contacts", contacts);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
      <Header />
      {/* <AddContact addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
