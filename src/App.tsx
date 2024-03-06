import { Divider } from "@mui/material";
import ChatScreen from "./components/ChatScreen";
import GroupDetails from "./components/GroupDetails";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { dataInterface, tempData } from "./constants/DataInterface";

const App = () => {
  const [data, setData] = useState<dataInterface>(tempData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<dataInterface> =
          await axios.get<dataInterface>(
            `https://qa.corider.in/assignment/chat?page=0`
          );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen w-full bg-red-100 flex justify-center items-center">
      <div className="h-screen sm:w-[450px] w-full bg-[#FAF9F4] absolute">
        <Header groupName={data.name} />
        <GroupDetails fromDetails={data.from} toDetails={data.to} />
        {/* avatar */}
        <Divider />
        <ChatScreen chats={data.chats} />
      </div>
    </div>
  );
};

export default App;

// group avatar --

// attachment(done)
// scroll message top (api problem)
// reply to ? (dont think works)
// kyc img (not found)
// scrooler at bottom (done)
// three dots
// two network calls (solved)
// date (solved)
