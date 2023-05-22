import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full px-2 mx-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Arijeet",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-3/4 px-1 mx-2 my-1 border border-black"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
        />
        <button className="w-[3rem] px-1 mx-2 my-1 bg-green-100 rounded-lg ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
