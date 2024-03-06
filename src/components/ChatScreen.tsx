import { useEffect, useRef } from "react";
import { chatInterface, chatScreenInterface } from "../constants/ChatInterface";
import ChatBoxOthers from "./ChatBoxOthers";
import ChatBoxSelf from "./ChatBoxSelf";
import ReplyBox from "./ReplyBox";
import { Divider } from "@mui/material";

const ChatScreen = ({ chats }: chatScreenInterface) => {
  let date: string = "2024-01-01";
  const messagesEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);
  return (
    <div className="px-3 py-2 h-[calc(100%-150px)] flex flex-col justify-end items-center w-full gap-1">
      <div className="overflow-y-auto  ">
        {chats.map((chat: chatInterface) => {
          const chatDate: string = chat?.time?.substr(0, 10) || "";
          let flag: Boolean = false;
          if (chatDate !== date) {
            flag = true;
            date = chatDate;
          }
          return (
            <div key={chat.id}>
              {flag && <Divider>{date}</Divider>}
              {chat.sender.self ? (
                <ChatBoxSelf chat={chat} key={chat.id} />
              ) : (
                <ChatBoxOthers chat={chat} key={chat.id} />
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <ReplyBox />
    </div>
  );
};

export default ChatScreen;
