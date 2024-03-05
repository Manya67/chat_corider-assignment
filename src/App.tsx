import { Divider } from "@mui/material";
import ChatScreen from "./components/ChatScreen";
import GroupDetails from "./components/GroupDetails";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { chatInterface } from "./constants/ChatInterface";

const tempData: dataInterface = {
  from: "Loading",
  message: "",
  name: "Loading",
  status: "success",
  to: "Loading",
  chats: [
    {
      id: "6693d962cbdc416bb7c22f72e7ada6b3",
      message:
        "Cras vel elit sed mi placerat pharetra eget vel odio.Aenean ullamcorper orci et vulputate fermentum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        is_kyc_verified: true,
        self: false,
        user_id: "73785ed67d034f6290b0334c6e756433",
      },
      time: "2024-03-05 21:30:02",
    },
  ],
};
export interface dataInterface {
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
  chats: chatInterface[];
}

const App = () => {
  const [data, setData] = useState<dataInterface>(tempData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<dataInterface> =
          await axios.get<dataInterface>(
            "https://qa.corider.in/assignment/chat?page=0"
          );
        console.log(response.data);
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
// scrooler at bottom
// scroll message top
// working buttons --
// reply to ? ---
// two network calls
// kyc img
