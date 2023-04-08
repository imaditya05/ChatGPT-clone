import React from 'react';

const Chatmessage = ({ chatmessage }) => {
  return (
    <div
      className="w-full "
      style={{
        backgroundColor: `${
          chatmessage.user === 'me' ? 'transparent' : '#40414F'
        } `,
      }}
    >
      <div
        className=" w-2/3 md:px-32 flex space-x-6 py-6 text-white text-md items-center "
        id="user-msg"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={
            chatmessage.user === 'me'
              ? `https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light`
              : `assets/chatgpt-icon.svg`
          }
        />
        <span className="text-md">{chatmessage.message}</span>
      </div>
    </div>
  );
};

export default Chatmessage;
