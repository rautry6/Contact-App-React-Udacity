import { useState } from "react";
import {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";

const App = () => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState([
    {
      id: "tyler",
      name: "Tyle McGinnis",
      handle: "@tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "@karen_isgrigg",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "@richardkalehoff",
      avatarURL: "http://localhose:5001/richard.jpg"
    }
  ]);

  const removeContact = (contact) =>{
    setContacts(contacts.filter(c => c.id !== contact.id));
  };

  const onCreateContact =(contact) =>{
    setContacts(contacts.concat(contact));
    navigate("/");
  }


  return(
   <Routes>
    <Route exact path="/" element={
      <ListContacts contacts={contacts} onDeleteContact={removeContact}/>
    }/>
    <Route path="/create" element={
      <CreateContact onCreateContact={
        (contact) =>{
        onCreateContact(contact);
      }}

      />
    }/>
   </Routes>
  )
};

export default App;
