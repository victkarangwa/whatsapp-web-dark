import React from "react";

const contactChat = (props) => {
  const {
    user: { id, contactName, profImg },
  } = props;
  return (
    <div>
      <div className="contact-card">
        <div className="flex-row">
          <div className="contact-prof">
            <img className="prof-img" src={profImg} alt="profile_image" />
          </div>
          <div className="flex-column">
            <div className="contact-name">
              <b>{contactName}</b>{" "}
            </div>
            <div className="latest-chat">Hey</div>
          </div>
        </div>
        <div className="flex-column">
          <div className="chat-time">21:10</div>
          <div className="chat-head">
            <span className="chats-num">12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactChat;
