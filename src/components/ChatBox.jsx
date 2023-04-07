import React from "react";

const ChatBox = () => {
  return (
    <div className="w-full md:w-full flex flex-col bg-light-gray h-screen relative items-center transition-all duration-100">
      <div
        className="w-2/3 md:px-32 flex space-x-6 py-6 bg-transparent text-white text-md items-center"
        id="user-msg"
      >
        <img
          className="w-10 h-10 rounded-lg"
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        />
        <span className="text-md">Hello</span>
      </div>
      <div className="w-full bg-[#40414F] text-center">
        <div
          className="w-2/3  flex space-x-6 md:px-32 py-6 mx-auto text-white text-md items-center"
          id="chatGPT-msg"
        >
          <img
            className="w-10 h-10 rounded-full"
            src="/assets/chatgpt-icon.svg"
          />
          <span className="text-md">Hello</span>
        </div>
      </div>
      <div className=" absolute bottom-16 w-2/3 md:w-6/12 ">
        <textarea
          rows={1}
          className="w-full bg-transparent shadow-lg rounded-md px-6 py-2 text-white text-lg outline-none relative bg-[#40414F] resize-none "
        />
        <button className="absolute right-4 top-2">
          <i className="fa-solid fa-paper-plane text-gray-400"></i>
        </button>
        <p className="text-gray-500 text-xs text-center mt-4">
          <a
            className=" underline cursor-pointer"
            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          >
            ChatGPT Mar 23 Version.
          </a>{" "}
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
