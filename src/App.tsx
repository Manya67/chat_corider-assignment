import { Divider } from "@mui/material";
import ChatScreen from "./components/ChatScreen";
import GroupDetails from "./components/GroupDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-full bg-red-100 flex justify-center items-center">
      <div className="h-screen sm:w-[450px] w-full bg-[#FAF9F4] border-2 absolute">
        <Header />
        <GroupDetails />
        <Divider />
        <ChatScreen />
      </div>
    </div>
  );
}

export default App;
