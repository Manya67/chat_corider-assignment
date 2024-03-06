import { chatDetailInterface } from "../constants/ChatInterface";

const ChatBoxSelf = ({ chat }: chatDetailInterface) => {
  return (
    <div className="h-auto flex flex-row items-start justify-start py-3 ">
      <p className="bg-blue-500 rounded-xl rounded-ee-none p-2">
        {chat.message}
      </p>
    </div>
  );
};

export default ChatBoxSelf;
