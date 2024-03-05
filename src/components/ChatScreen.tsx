import ChatBoxOthers from "./ChatBoxOthers";
import ChatBoxSelf from "./ChatBoxSelf";
import ReplyBox from "./ReplyBox";

const ChatScreen = () => {
  return (
    <div className="px-3 py-2 h-[78%] flex flex-col justify-between items-center w-full gap-1">
      <div className="overflow-y-scroll flex flex-col justify-end items-end h-[calc(100%_-_2.5rem)]">
        <ChatBoxOthers />
        <ChatBoxSelf />
        <ChatBoxOthers />
        <ChatBoxSelf />
        <ChatBoxOthers />
        <ChatBoxSelf />
        <ChatBoxOthers />
        <ChatBoxSelf />
        <ChatBoxOthers />
        <ChatBoxSelf />
        <ChatBoxOthers />
        <ChatBoxSelf />
      </div>
      <ReplyBox />
    </div>
  );
};

export default ChatScreen;
