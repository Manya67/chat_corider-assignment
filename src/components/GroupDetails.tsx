import { Avatar } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { groupInterface } from "../constants/GroupInterface";

const GroupDetails = ({ fromDetails, toDetails }: groupInterface) => {
  return (
    <div className="h-[86px] flex justify-between items-center px-3">
      <div className="w-auto h-full flex flex-row items-center justify-between gap-3">
        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
        <div className="flex flex-col">
          <h6 className="text-slate-600 text-md">
            From <span className="text-black text-lg">{fromDetails}</span>
          </h6>
          <h6 className="text-slate-600 text-md">
            To <span className="text-black text-lg">{toDetails}</span>
          </h6>
        </div>
      </div>
      <div>
        <BsThreeDotsVertical size={24} />
      </div>
    </div>
  );
};

export default GroupDetails;
