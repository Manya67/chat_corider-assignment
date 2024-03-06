import { Avatar, Divider } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { groupInterface } from "../constants/GroupInterface";
import { useRef, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageX } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";

const GroupDetails = ({ fromDetails, toDetails }: groupInterface) => {
  const [openMenu, setOpenMenu] = useState(false);
  const catMenu = useRef<HTMLInputElement>(null);

  const closeOpenMenus = (e: MouseEvent): any => {
    if (openMenu && !catMenu.current?.contains(e.target as Node)) {
      setOpenMenu(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <div className="min-h-[86px] flex justify-between items-center px-3">
      <div className="w-auto h-full flex flex-row items-center justify-between gap-3">
        <Avatar sx={{ width: 56, height: 56 }}>G</Avatar>
        <div className="flex flex-col">
          <h6 className="text-slate-600 text-md">
            From <span className="text-black text-lg">{fromDetails}</span>
          </h6>
          <h6 className="text-slate-600 text-md">
            To <span className="text-black text-lg">{toDetails}</span>
          </h6>
        </div>
      </div>
      <div
        className="relative flex items-center justify-end"
        onClick={() => {
          setOpenMenu(!openMenu);
          console.log(openMenu);
        }}
        ref={catMenu}
      >
        <BsThreeDotsVertical size={24} />
        {openMenu && (
          <div className="w-36 mt-10 top-0 overflow-hidden absolute bg-white py-2 rounded-xl border-[2px] text-sm">
            <span className="flex flex-row justify-start gap-2 items-center p-2">
              <BiGroup size={20} />
              <h5>Members</h5>
            </span>
            <Divider />
            <span className="flex flex-row justify-start gap-2 items-center p-2">
              <IoCallOutline size={20} />
              <h5>Share Number</h5>
            </span>
            <Divider />
            <span className="flex flex-row justify-start gap-2 items-center p-2">
              <BiMessageX size={20} />
              <h5>Report</h5>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
