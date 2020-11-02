import React from "react";
import Contact from "../components/contactChat";
import { contacts } from "../data/contacts";
import { chats } from "../data/chats";
import '../App.css';

const Home = () => {
  return (
    <div className="main-page">
      <div className="contact-panel">
          <div className="user-profile">
              
          </div>
        {contacts.map((user) => {
          return <Contact key={user.id} user={user} />;
        })}
      </div>
      <div className="chat-panel"></div>
      <div className="chat-profile"></div>
      <div className="chat-msg"></div>
    </div>
  );
};
export default Home;
