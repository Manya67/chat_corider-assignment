import { IoArrowBack } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import { headerInterface } from "../constants/HeaderInterface";

const Header = ({ groupName }: headerInterface) => {
  return (
    <div className="h-[64px] flex flex-row justify-between items-center px-3">
      <div className="w-auto flex flex-row items-center justify-between gap-3">
        <IoArrowBack size={24} />
        <h2 className="text-xl">{groupName}</h2>
      </div>
      <div>
        <LuPenSquare size={24} />
      </div>
    </div>
  );
};

export default Header;
