import { IoArrowBack } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";

const Header = () => {
  return (
    <div className="h-[10%] flex flex-row justify-between items-center px-3">
      <div className="w-auto flex flex-row items-center justify-between gap-3">
        <IoArrowBack size={24} />
        <h2 className="text-xl">Group Name</h2>
      </div>
      <div>
        <LuPenSquare size={24} />
      </div>
    </div>
  );
};

export default Header;
