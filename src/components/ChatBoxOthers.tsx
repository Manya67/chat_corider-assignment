import { Avatar, Badge } from "@mui/material";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { chatDetailInterface } from "../constants/ChatInterface";

const ChatBoxOthers = ({ chat }: chatDetailInterface) => {
  return (
    <div className="h-auto flex flex-row items-start justify-start pt-2 gap-2">
      {chat.sender.is_kyc_verified ? (
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<RiVerifiedBadgeFill size={16} color="blue" />}
        >
          <Avatar alt="Sender's img" src={chat.sender.image} />
        </Badge>
      ) : (
        <Avatar alt="Sender's img" src={chat.sender.image} />
      )}
      <p className="bg-white rounded-xl rounded-ss-none p-2">{chat.message}</p>
    </div>
  );
};

export default ChatBoxOthers;
