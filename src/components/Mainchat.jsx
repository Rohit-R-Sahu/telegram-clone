import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCall, IoMdSend } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import ChatBubble from "./ChatBubble";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Mainchat = () => {
  const icons = [<AiOutlineSearch />, <IoMdCall />, <SlOptionsVertical />];
  const location = useLocation();
  const [chat, setChat] = useState(location.state.chat);

  return (
    <div className="container-fluid h-[100%] flex flex-col items-center">
      <div className="bg-white py-2 border-x-2 flex justify-between items-center px-6 w-full">
        <div className="flex items-center justify-center gap-3">
          <div className="rounded-full h-[50px] w-[50px] flex items-center justify-around text-2xl bg-red-400">
            R
          </div>
          <div>
            <div className="font-semibold text-lg">Rohit</div>
            <div className="text-sm">Last Seen 4/12/2023</div>
          </div>
        </div>
        <div>
          {icons.map((icon, i) => {
            return (
              <button
                className="rounded-full hover:bg-gray-200 p-3 text-xl mx-2"
                key={i}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>
      <div className="container-w flex-[1] px-10 overflow-scroll scroll-smooth">
        <div className="flex flex-col space-y-4 p-4">
          {chat.map((c) => {
            return (
              <>
                <ChatBubble
                  message={c.message}
                  isMine={c.sender_id == 1 ? "true" : false}
                  time={c.updated_at}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="py-4 container-w flex gap-5 px-6">
        <div className="w-full px-4 bg-white py-3 rounded-xl flex gap-2 items-center">
          <BsEmojiSmile className="text-2xl text-gray-400 hover:text-blue-500" />
          <input
            type="text"
            className="h-[34px] w-full outline-none border-none"
            placeholder="Message"
          />
          <GrAttachment className="text-2xl  text-gray-400 hover:text-blue-500" />
        </div>
        <button className="bg-white rounded-full h-[55px] w-[60px] flex items-center justify-center hover:bg-blue-500 ">
          <IoMdSend className="text-3xl text-blue-500 hover:text-white pl-1" />
        </button>
      </div>
    </div>
  );
};

export default Mainchat;
