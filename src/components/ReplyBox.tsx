import { useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { PiFileArrowDown } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

const ReplyBox = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const catMenu = useRef<HTMLInputElement>(null);

  const closeOpenMenus = (e: MouseEvent): any => {
    if (openMenu && !catMenu.current?.contains(e.target as Node)) {
      setOpenMenu(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <div className="bg-white w-full min-h-10 rounded-md flex flex-row justify-between items-center px-2">
      <input
        type="text"
        className="w-80% pl-2 outline-none text-sm"
        placeholder="Reply to"
      />
      <div className="flex flex-row gap-4 text-lg ">
        <div
          className=""
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          ref={catMenu}
        >
          {openMenu && (
            <>
              <div className="w-32 text-white text-2xl bottom-0 right-1 overflow-hidden absolute mb-12 flex flex-row justify-evenly items-center py-1 rounded-2xl bg-green-900">
                <MdOutlineCameraAlt />
                <LuVideo />
                <PiFileArrowDown />
              </div>
              <div className="bottom-[1.33rem] right-12 absolute text-green-900 text-3xl mb-2">
                <IoMdArrowDropdown />
              </div>
            </>
          )}
          <GrAttachment />
        </div>

        <VscSend />
      </div>
    </div>
  );
};

export default ReplyBox;
