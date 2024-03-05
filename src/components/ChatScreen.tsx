import { chatInterface, chatScreenInterface } from "../constants/ChatInterface";
import ChatBoxOthers from "./ChatBoxOthers";
import ChatBoxSelf from "./ChatBoxSelf";
import ReplyBox from "./ReplyBox";

const ChatScreen = ({ chats }: chatScreenInterface) => {
  return (
    <div className="px-3 py-2 h-[calc(100%-150px)] flex flex-col justify-end items-center w-full gap-1">
      <div className="overflow-y-auto  ">
        {chats.map((chat: chatInterface) => {
          return chat.sender.self ? (
            <ChatBoxSelf chat={chat} key={chat.id} />
          ) : (
            <ChatBoxOthers chat={chat} key={chat.id} />
          );
        })}
      </div>
      <ReplyBox />
    </div>
  );
};

export default ChatScreen;
