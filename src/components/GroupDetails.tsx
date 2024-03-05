import { Avatar, Divider } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupDetails = () => {
  return (
    <div className="h-[12%] flex justify-between items-center px-3">
      <div className="w-auto h-full flex flex-row items-center justify-between gap-3">
        {/* <span className="h-8 w-8 bg-black rounded-xl" /> */}
        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
        <div className="flex flex-col">
          <h6 className="text-slate-600 text-md">
            From <span className="text-black text-lg">From details</span>
          </h6>
          <h6 className="text-slate-600 text-md">
            To <span className="text-black text-lg">To details</span>
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
