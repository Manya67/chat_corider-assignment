import { GrAttachment } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";

const ReplyBox = () => {
  return (
    <div className="bg-white w-full h-10 rounded-md flex flex-row justify-between items-center px-2">
      <input
        type="text"
        className="w-80% pl-2 outline-none text-sm"
        placeholder="Reply to"
      />
      <div className="flex flex-row gap-2">
        <GrAttachment />
        <VscSend />
      </div>
    </div>
  );
};

export default ReplyBox;
