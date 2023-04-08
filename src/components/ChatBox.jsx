import React, { useContext, useState } from 'react';
import Chatmessage from './Chatmessage';
import { AppContext } from './AppContext';

const ChatBox = () => {
  const [input, setInput] = useState('');
  const { chatLog, setChatLog } = useContext(AppContext);

  async function handleSubmit(event) {
    event.preventDefault();
    let chatLogNew = [...chatLog, { user: 'me', message: `${input}` }];
    await setInput('');
    await setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.message).join('\n');
    //Request from API

    const response = await fetch('http://localhost:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: messages,
      }),
    });
    const data = await response.json();
    await setChatLog([
      ...chatLogNew,
      {
        user: 'gpt',
        message: `${data.message}`,
      },
    ]);
    console.log(data.message);
  }

  return (
    <div className="w-full md:w-full flex flex-col bg-light-gray h-screen relative items-center transition-all duration-100">
      {chatLog.map((chat, index) => (
        <Chatmessage key={index} chatmessage={chat} />
      ))}

      <div
        className=" absolute
       bottom-16 w-2/3 md:w-6/12 "
      >
        <form onSubmit={handleSubmit}>
          <input
            className="w-full bg-transparent shadow-lg rounded-md px-6 py-2 text-white text-lg outline-none relative bg-[#414250] resize-none "
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <button className="absolute right-4 top-2">
            <i className="fa-solid fa-paper-plane text-gray-400"></i>
          </button>
        </form>
        <p className="text-gray-500 text-xs text-center mt-4">
          <a
            className=" underline cursor-pointer"
            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          >
            ChatGPT Mar 23 Version.
          </a>{' '}
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
