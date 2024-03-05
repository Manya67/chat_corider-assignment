import { Avatar, Badge } from "@mui/material";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const ChatBoxOthers = () => {
  return (
    <div className="h-auto flex flex-row items-start justify-start pt-2 gap-2">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<RiVerifiedBadgeFill size={16} color="blue" />}
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Badge>
      <p className="bg-white rounded-xl rounded-ss-none p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default ChatBoxOthers;
