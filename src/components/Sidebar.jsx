import { memo, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const bg_col = [
    "bg-red-300 text-black",
    "bg-blue-300 text-white",
    "bg-green-300 text-black",
    "bg-yellow-300 text-black",
    "bg-purple-300 text-white",
    "bg-pink-300 text-black",
    "bg-indigo-400 text-white",
    "bg-gray-300 text-black",
    "bg-orange-300 text-black",
    "bg-teal-300 text-black",
    "bg-lime-300 text-black",
    "bg-amber-300 text-black",
    "bg-cyan-300 text-black",
    "bg-rose-300 text-black",
    "bg-fuchsia-300 text-white",
    "bg-emerald-300 text-black",
    "bg-violet-300 text-white",
    "bg-blue-500 text-white",
    "bg-red-500 text-white",
    "bg-green-500 text-white",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((res) => res.json())
      .then((result) => setData(result.data.data));
  }, []);
  const [chat, setChat] = useState([]);
  const [chatId, setChatId] = useState(0);

  useEffect(() => {
    fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
    )
      .then((res) => res.json())
      .then((result) => setChat(result.data))
      .catch((err) => console.log(err));
  }, [chatId]);

  const navigate = useNavigate();
  navigate("/", { state: { chat: chat } });

  return (
    <div className="container-fluid px-3 py-1">
      <div className="flex gap-5 pb-3">
        <button>
          <AiOutlineMenu className="text-2xl" />
        </button>
        <div className="flex rounded-full px-6 py-3 items-center flex-[1] bg-gray-100">
          <AiOutlineSearch className="text-xl text-gray-400" />
          <input
            type="text"
            className="px-3 outline-none border-none w-full bg-gray-100"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-2">
        {data.map(
          (item) => {
            return (
              <>
                {item.creator.name === null ? null : (
                  <div
                    className="bg-white rounded-lg px-3 py-2 flex gap-2 hover:bg-gray-100  cursor-pointer"
                    key={item.id}
                    onClick={() => setChatId(item.id)}
                  >
                    <div
                      className={`rounded-full h-[50px] w-[50px] flex items-center justify-center text-2xl ${
                        bg_col[Math.floor(Math.random() * bg_col.length - 1)]
                      }`}
                    >
                      {item.creator.name[0]}
                    </div>
                    <div className="flex-[1] ml-1">
                      <div className="font-semibold">{item.creator.name}</div>

                      <div
                        className={
                          item.status == "ongoing"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {item.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-[0.8rem]">
                        {new Date(item.creator.updated_at).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "short",
                          }
                        )}
                      </div>
                      <div
                        className={
                          item.status == "ongoing"
                            ? "bg-green-600 text-[0.8rem] text-white text-center rounded-full"
                            : "bg-gray-500 text-[0.8rem] text-white text-center rounded-full"
                        }
                      >
                        {item.msg_count}
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          }

          //
        )}
      </div>
    </div>
  );
};

export default Sidebar;
